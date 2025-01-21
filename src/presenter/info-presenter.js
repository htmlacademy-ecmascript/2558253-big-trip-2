import { render, RenderPosition } from '../render.js';

import InfoView from '../view/info-view.js';

export default class InfoPresenter {
  infoComponent = new InfoView();

  constructor({infoContainer}) {
    this.infoContainer = infoContainer;
  }

  init() {
    render(this.infoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
  }
}
