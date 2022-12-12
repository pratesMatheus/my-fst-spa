import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async getHTML() {
    return `
      <h1>Welcome back, Matheus</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?
      </p>
      <p>
        <a href="/posts" data-link>View recents posts</a>
      </p>
    `;
  }
}