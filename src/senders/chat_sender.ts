import { Sender } from '../sender';

export class ChatSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public getGroupChats(meetingId: string, userId: string): void {
    const message = {
      header: {
        name: 'GetGroupChatsReqMsg',
        meetingId,
        userId,
      },
      body: {},
    };
    this.sendMessage(message);
  }

  public getGroupChatMsgHistory(meetingId: string, userId: string, userId: string): void {
    const message = {
      header: {
        name: 'GetGroupChatMsgsReqMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
      },
    };
    this.sendMessage(message);
  }

  public sendPublicMessage(meetingId: string, userId: string, chatId: string, msgFromUser: any): void {
    const message = {
      header: {
        name: 'SendGroupChatMessageMsg',
        meetingId,
        userId,
      },
      body: {
        chatId,
        msgFromUser,
      },
    };
    this.sendMessage(message);
  }

  public userTyping(meetingId: string, userId: string, chatId: string): void {
    const message = {
      header: {
        name: 'UserTypingPubMsg',
        meetingId,
        userId,
      },
      body: {
        chatId,
      },
    };
    this.sendMessage(message);
  }

  public clearPublicChatMessages(meetingId: string, userId: string, chatId: string): void {
    const message = {
      header: {
        name: 'ClearPublicChatHistoryPubMsg',
        meetingId,
        userId,
      },
      body: {
        chatId,
      },
    };
    this.sendMessage(message);
  }

  public clearPublicChatMessages(meetingId: string, userId: string, chatId: string): void {
    const message = {
      header: {
        name: 'ClearPublicChatHistoryPubMsg',
        meetingId,
        userId,
      },
      body: {
        chatId,
      },
    };
    this.sendMessage(message);
  }

  public createGroupChat(meetingId: string, userId: string, name: String, access: String, users: []): void {
    var correlationId: String = userId + '-' + new Date().getTime;

    const message = {
      header: {
        name: 'CreateGroupChatReqMsg',
        meetingId,
        userId,
      },
      body: {
        correlationId,
        name,
        access,
        users,
        msg: [],
      },
    };
    this.sendMessage(message);
  }

  private sendMessage(jsonObj: any): void {
    this.sender.send(jsonObj);
  }
}
