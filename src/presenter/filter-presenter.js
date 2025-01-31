import { render } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import { filters } from '../main.js';
export default class FilterPresenter {
  #filterComponent = null;
  #filterContainer = null;

  constructor({filterContainer}) {
    this.#filterContainer = filterContainer;
  }

  init() {
    this.#filterComponent = new FilterView({filters});
    render(this.#filterComponent, this.#filterContainer);
  }
}
