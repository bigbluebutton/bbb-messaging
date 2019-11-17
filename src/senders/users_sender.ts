import { Sender } from '../sender';

export class UsersSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }
}
