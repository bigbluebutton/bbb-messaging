interface MessageHandler {
  onMessage(name: string, bodyJsonObj: any): void;
}
