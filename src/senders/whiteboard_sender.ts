import { Sender } from '../sender';

export class WhiteboardSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  /**
   * Sends a call out to the server to notify the clients that they need to switch multi-user whiteboard on or off
   *
   * @param meetingId
   * @param userId
   * @param whiteboardId
   * @param multiUser
   */
  public modifyAccess(meetingId: string, userId: string, whiteboardId: string, multiUser: boolean): void {
    const message = {
      header: {
        name: 'ModifyWhiteboardAccessPubMsg',
        meetingId,
        userId,
      },
      body: {
        whiteboardId,
        multiUser,
      },
    };
    this.sendMessage(message);
  }

  /**
   * Sends a call out to the server to notify the clients to undo a GraphicObject
   *
   * @param meetingId
   * @param userId
   * @param whiteboardId
   */
  public undoGraphic(meetingId: string, userId: string, whiteboardId: string) {
    const message = {
      header: {
        name: 'UndoWhiteboardPubMsg',
        meetingId,
        userId,
      },
      body: {
        whiteboardId,
      },
    };
    this.sendMessage(message);
  }

  /**
   * Sends a call out to the server to notify the clients that the board needs to be cleared
   *
   * @param meetingId
   * @param userId
   * @param whiteboardId
   */
  public clearBoard(meetingId: string, userId: string, whiteboardId: string) {
    const message = {
      header: {
        name: 'ClearWhiteboardPubMsg',
        meetingId,
        userId,
      },
      body: {
        whiteboardId,
      },
    };
    this.sendMessage(message);
  }

  /**
   * Sends a call out to the server to fetch all the whiteboard annotations
   *
   * @param meetingId
   * @param userId
   * @param whiteboardId
   */
  public requestAnnotationHistory(meetingId: string, userId: string, whiteboardId: string) {
    const message = {
      header: {
        name: 'GetWhiteboardAnnotationsReqMsg',
        meetingId,
        userId,
      },
      body: {
        whiteboardId,
      },
    };
    this.sendMessage(message);
  }

  /**
   * Sends a shape to the Shared Object on the red5 server, and then triggers an update across all clients
   *
   * @param meetingId
   * @param userId
   * @param whiteboardId
   * @param annotationId
   * @param annotationStatus
   * @param annotationType
   * @param annotationInfo
   */
  public sendShape(
    meetingId: string,
    userId: string,
    whiteboardId: string,
    annotationId: string,
    annotationStatus: string,
    annotationType: string,
    annotationInfo: string,
  ) {
    const message = {
      header: {
        name: 'SendWhiteboardAnnotationPubMsg',
        meetingId,
        userId,
      },
      body: {
        annotation: {
          id: annotationId,
          status: annotationStatus,
          annotationType,
          annotationInfo,
          wbId: whiteboardId,
          userId,
          position: -1,
        },
      },
    };
    this.sendMessage(message);
  }

  /**
   * Send an event to the server to update the user's cursor position
   *
   * @param meetingId
   * @param userId
   * @param whiteboardId
   * @param xPercent
   * @param yPercent
   */
  public sendCursorPosition(
    meetingId: string,
    userId: string,
    whiteboardId: string,
    xPercent: number,
    yPercent: number,
  ) {
    const message = {
      header: {
        name: 'SendCursorPositionPubMsg',
        meetingId,
        userId,
      },
      body: {
        whiteboardId,
        xPercent,
        yPercent,
      },
    };
    this.sendMessage(message);
  }

  public sendClientToServerLatencyTracerMsg(meetingId: string, userId: string, rtt: number) {
    const message = {
      header: {
        name: 'ClientToServerLatencyTracerMsg',
        meetingId,
        userId,
      },
      body: {
        timestampUTC: new Date().getTime,
        rtt,
        senderId: userId,
      },
    };
    this.sendMessage(message);
  }

  private sendMessage(jsonObj: any): void {
    this.sender.send(jsonObj);
  }
}
