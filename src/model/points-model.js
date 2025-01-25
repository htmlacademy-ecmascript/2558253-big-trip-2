import { destinations } from '../mock/destinations';
import { offers } from '../mock/offers';
import { points } from '../mock/points';

export default class PointModel {
  _points = [];
  _destinations = [];
  _offers = [];

  init() {
    this._points = structuredClone(points);
    this._destinations = structuredClone(destinations);
    this._offers = structuredClone(offers);
  }

  get points() {
    return this._points;
  }

  get destinations() {
    return this._destinations;
  }

  get offers() {
    return this._offers;
  }
}
