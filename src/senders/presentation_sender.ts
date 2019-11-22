import { Sender } from '../sender';

export class PresentationSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public move(
    meetingId: string,
    userId: string,
    podId: string,
    presentationId: string,
    pageId: string,
    xOffset: Number,
    yOffset: Number,
    widthRatio: Number,
    heightRatio: Number,
  ): void {
    const message = {
      header: {
        name: 'ResizeAndMovePagePubMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        presentationId,
        pageId,
        xOffset,
        yOffset,
        widthRatio,
        heightRatio,
      },
    };
    this.sendMessage(message);
  }

  public sharePresentation(meetingId: string, userId: string, podId: string, presentationId: string) {
    const message = {
      header: {
        name: 'SetCurrentPresentationPubMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        presentationId,
      },
    };
    this.sendMessage(message);
  }

  public sharePresentation(meetingId: string, userId: string, podId: string, presentationId: string, pageId: string) {
    const message = {
      header: {
        name: 'SetCurrentPagePubMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        presentationId,
        pageId,
      },
    };
    this.sendMessage(message);
  }

  public requestAllPodsEvent(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'GetAllPresentationPodsReqMsg',
        meetingId,
        userId,
      },
      body: {},
    };
    this.sendMessage(message);
  }

  public removePresentation(meetingId: string, userId: string, podId: string, presentationId: string) {
    const message = {
      header: {
        name: 'RemovePresentationPubMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        presentationId,
      },
    };
    this.sendMessage(message);
  }

  public setPresentationDownloadable(
    meetingId: string,
    userId: string,
    podId: string,
    presentationId: string,
    downloadable: boolean,
  ) {
    const message = {
      header: {
        name: 'SetPresentationDownloadablePubMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        presentationId,
        downloadable,
      },
    };
    this.sendMessage(message);
  }

  public requestPresentationUploadPermission(meetingId: string, userId: string, podId: string, filename: string) {
    const message = {
      header: {
        name: 'PresentationUploadTokenReqMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        filename,
      },
    };
    this.sendMessage(message);
  }

  public requestNewPresentationPod(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'CreateNewPresentationPodPubMsg',
        meetingId,
        userId,
      },
      body: {},
    };
    this.sendMessage(message);
  }

  public requestClosePresentationPod(meetingId: string, userId: string, podId: string) {
    const message = {
      header: {
        name: 'RemovePresentationPodPubMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
      },
    };
    this.sendMessage(message);
  }

  public handleSetPresenterInPodReqEvent(meetingId: string, userId: string, podId: string, nextPresenterId: string) {
    const message = {
      header: {
        name: 'SetPresenterInPodReqMsg',
        meetingId,
        userId,
      },
      body: {
        podId,
        nextPresenterId,
      },
    };
    this.sendMessage(message);
  }

  private sendMessage(jsonObj: any): void {
    this.sender.send(jsonObj);
  }
}
