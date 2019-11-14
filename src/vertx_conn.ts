import { EventBus } from '../js3rdparty/vertx-eventbus';

export class VertxConn {
  vertx: any;

  constructor(url: string, options = {}) {
    this.vertx = new EventBus(url, options);
  }

  private onclose(): void {
    console.log('On Close');
  }
}
