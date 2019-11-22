import { Sender } from '../sender';

export class CaptionSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public getCaptionHistory(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'SendCaptionHistoryReqMsg',
        meetingId,
        userId,
      },
      body: {},
    };
    this.sendMessage(message);
  }

  public sendUpdateCaptionOwner(meetingId: string, userId: string, locale: string, localeCode: string) {
    const message = {
      header: {
        name: 'UpdateCaptionOwnerPubMsg',
        meetingId,
        userId,
      },
      body: {
        locale,
        localeCode,
      },
    };
    this.sendMessage(message);
  }

  public sendEditCaptionHistory(
    meetingId: string,
    userId: string,
    startIndex: string,
    endIndex: string,
    locale: string,
    localeCode: string,
    text: string,
  ) {
    const message = {
      header: {
        name: 'EditCaptionHistoryPubMsg',
        meetingId,
        userId,
      },
      body: {
        startIndex,
        endIndex,
        locale,
        localeCode,
        text,
      },
    };
    this.sendMessage(message);
  }

  private sendMessage(jsonObj: any): void {
    this.sender.send(jsonObj);
  }
}
