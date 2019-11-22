import { Sender } from '../sender';

export class PollingSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public startCustomPoll(
    meetingId: string,
    userId: string,
    requesterId: string,
    pollId: string,
    pollType: string,
    answers: [],
  ): void {
    const message = {
      header: {
        name: 'StartCustomPollReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        pollId,
        pollType,
        answers,
      },
    };
    this.sendMessage(message);
  }

  public startPoll(meetingId: string, userId: string, requesterId: string, pollId: string, pollType: string): void {
    const message = {
      header: {
        name: 'StartPollReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        pollId,
        pollType,
      },
    };
    this.sendMessage(message);
  }

  public stopPoll(meetingId: string, userId: string, requesterId: string): void {
    const message = {
      header: {
        name: 'StopPollReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
      },
    };
    this.sendMessage(message);
  }

  public votePoll(
    meetingId: string,
    userId: string,
    requesterId: string,
    pollId: string,
    questionId: string,
    answerId: string,
  ): void {
    const message = {
      header: {
        name: 'RespondToPollReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        pollId,
        questionId,
        answerId,
      },
    };
    this.sendMessage(message);
  }

  public showPollResult(meetingId: string, userId: string, requesterId: string, pollId: string): void {
    const message = {
      header: {
        name: 'ShowPollResultReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        pollId,
      },
    };
    this.sendMessage(message);
  }

  private sendMessage(jsonObj: any): void {
    this.sender.send(jsonObj);
  }
}
