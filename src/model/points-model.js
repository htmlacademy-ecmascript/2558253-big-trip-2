import { destinations } from '../mock/destinations';
import { offers } from '../mock/offers';
import { getRandomPoint } from '../mock/points';

const POINT_COUNT = 4;
export default class PointModel {
  #points = [];
  #destinations = [];
  #offers = [];

  init() {
    this.#points = structuredClone(Array.from({length: POINT_COUNT}, getRandomPoint));
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
