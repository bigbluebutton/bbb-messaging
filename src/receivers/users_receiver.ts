import { Receiver } from '../receiver';
import { Handler } from '../message_handler';

export class UsersReceiver {
  private receiver: Receiver;
  private handler: MessageHandler[];

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  addHandler(handler: MessageHandler): void {
    this.handler.concat(handler);
  }

  removeHandler(handler: MessageHandler): void {
    // Find and remove handler;
  }

  onMessage(jsonStr: string): void {
    try {
      msg = JSON.parse(jsonStr)
      handleMessage(msg);
    } catch () {

    }

  }

  private deliverMessage(jsonObj: any) : void {
    this.handler.forEach { h =>
      h.onMessage(header.name, jsonObj.body);
    }
  }
  private handleMessage(jsonObj: any) : void {
    let header: any = jsonObj.header;

    if (header.name === 'foo') {
      deliverMessage(jsonObj.body);
    }

  }
}
