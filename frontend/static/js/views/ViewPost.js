import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHTML() {
    return `
      <h1>Fst Post</h1>
      <h3>You are viewing the post</h3>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit culpa debitis impedit? Ratione sed vero odit voluptates labore eveniet porro, facere molestiae ab. Harum molestiae nam pariatur impedit praesentium?
      </p>
      <p>
      <a href="/" data-link>back to Dashboard</a>
      </p>
    `;
  }
}