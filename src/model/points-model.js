import { destinations } from '../mock/destinations';
import { offers } from '../mock/offers';
import { points } from '../mock/points';

export default class PointModel {
  #points = [];
  #destinations = [];
  #offers = [];

  init() {
    this.#points = structuredClone(points);
    this.#destinations = structuredClone(destinations);
    this.#offers = structuredClone(offers);
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
