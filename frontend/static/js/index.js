//console.log('JS is loaded');
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import ViewPost from './views/ViewPost.js'
import Settings from "./views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
    })
  );

  //Test this in browser terminal:
  // "/posts/2".match(/^\/posts\/(.+)$/);
  //"/posts/2/4".match(/^\/posts\/(.+)\/(.+)$/);
} 

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  //console.log(pathToRegex('/posts/:id'));
  const routes = [
    {path: '/', view: Dashboard },
    {path: '/posts', view: Posts },
    {path: '/posts/:id', view: ViewPost },
    //{path: '/posts/:id/:code', view: Posts },
    {path: '/settings', view: Settings }
  ];
  //Testing each route for potential match
  const potencialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potencialMatches.find(potencialMatch => potencialMatch.result !== null);
  //if there is not match, so final user will redirected to "Viewing Dashboard"
  if(!match){
    match = {
    route: routes[0],
    result: [location.pathname]/* isMatch: true */
    }
  };

  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHTML();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', ()=> {
  document.body.addEventListener('click', e => {
    if(e.target.matches('[data-link')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
