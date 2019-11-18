import { Sender } from '../sender';

export class UsersSender {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public queryForParticipants(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'GetUsersMeetingReqMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
      },
    };
    this.sendMessage(message);
  }

  public queryForGuestsWaiting(meetingId: string, userId: string, requesterId: string) {
    const message = {
      header: {
        name: 'GetGuestsWaitingApprovalReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
      },
    };
    this.sendMessage(message);
  }

  public joinMeeting(meetingId: string, userId: string, requesterId: string, authToken: string, clientType: string) {
    const message = {
      header: {
        name: 'UserJoinMeetingReqMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
        authToken,
        clientType,
      },
    };
    this.sendMessage(message);
  }

  public joinMeetingAfterReconnect(
    meetingId: string,
    userId: string,
    requesterId: string,
    authToken: string,
    clientType: string,
  ) {
    const message = {
      header: {
        name: 'UserJoinMeetingAfterReconnectReqMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
        authToken,
        clientType,
      },
    };
    this.sendMessage(message);
  }

  public assignPresenter(
    meetingId: string,
    userId: string,
    requesterId: string,
    newPresenterId: string,
    newPresenterName: string,
    assignedBy: string,
  ) {
    const message = {
      header: {
        name: 'AssignPresenterReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        newPresenterId,
        newPresenterName,
        assignedBy,
      },
    };
    this.sendMessage(message);
  }

  public emojiStatus(meetingId: string, userId: string, emoji: string) {
    const message = {
      header: {
        name: 'ChangeUserEmojiCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
        emoji,
      },
    };
    this.sendMessage(message);
  }

  public createBreakoutRooms(
    meetingId: string,
    userId: string,
    rooms: [],
    durationInMinutes: BigInteger,
    record: boolean,
  ) {
    const message = {
      header: {
        name: 'CreateBreakoutRoomsCmdMsg',
        meetingId,
        userId,
      },
      body: {
        meetingId,
        durationInMinutes,
        record,
        rooms,
      },
    };
    this.sendMessage(message);
  }

  public requestBreakoutJoinUrl(meetingId: string, userId: string, parentMeetingId: string, breakoutMeetingId: string) {
    const message = {
      header: {
        name: 'RequestBreakoutJoinURLReqMsg',
        meetingId,
        userId,
      },
      body: {
        parentMeetingId,
        breakoutMeetingId,
        userId,
      },
    };
    this.sendMessage(message);
  }

  public listenInOnBreakout(meetingId: string, userId: string, fromMeetingId: string, toMeetingId: string) {
    const message = {
      header: {
        name: 'TransferUserToMeetingRequestMsg',
        meetingId,
        userId,
      },
      body: {
        fromMeetingId,
        toMeetingId,
        userId,
      },
    };
    this.sendMessage(message);
  }

  public endAllBreakoutRooms(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'EndAllBreakoutRoomsMsg',
        meetingId,
        userId,
      },
      body: {
        meetingId,
      },
    };
    this.sendMessage(message);
  }

  public addStream(meetingId: string, userId: string, streamName: string) {
    const message = {
      header: {
        name: 'UserBroadcastCamStartMsg',
        meetingId,
        userId,
      },
      body: {
        streamName,
      },
    };
    this.sendMessage(message);
  }

  public removeStream(meetingId: string, userId: string, streamName: string) {
    const message = {
      header: {
        name: 'UserBroadcastCamStopMsg',
        meetingId,
        userId,
      },
      body: {
        streamName,
      },
    };
    this.sendMessage(message);
  }

  public logoutEndMeeting(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'LogoutAndEndMeetingCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
      },
    };
    this.sendMessage(message);
  }

  public queryForRecordingStatus(meetingId: string, userId: string, requestedBy: string) {
    const message = {
      header: {
        name: 'GetRecordingStatusReqMsg',
        meetingId,
        userId,
      },
      body: {
        requestedBy,
      },
    };
    this.sendMessage(message);
  }

  public queryForBreakoutRooms(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'BreakoutRoomsListMsg',
        meetingId,
        userId,
      },
      body: {
        meetingId,
      },
    };
    this.sendMessage(message);
  }

  public activityResponse(meetingId: string, userId: string, respondedBy: string) {
    const message = {
      header: {
        name: 'MeetingActivityResponseCmdMsg',
        meetingId,
        userId,
      },
      body: {
        respondedBy,
      },
    };
    this.sendMessage(message);
  }

  public userActivitySignResponse(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'UserActivitySignCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
      },
    };
    this.sendMessage(message);
  }

  public changeRecordingStatus(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'SetRecordingStatusCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
      },
    };
    this.sendMessage(message);
  }

  public recordAndClearPreviousMarkers(meetingId: string, userId: string, recording: boolean, setBy: string) {
    const message = {
      header: {
        name: 'RecordAndClearPreviousMarkersCmdMsg',
        meetingId,
        userId,
      },
      body: {
        recording,
        setBy,
      },
    };
    this.sendMessage(message);
  }

  public muteAllUsers(meetingId: string, userId: string, mute: boolean, mutedBy: string) {
    const message = {
      header: {
        name: 'MuteMeetingCmdMsg',
        meetingId,
        userId,
      },
      body: {
        mute,
        mutedBy,
      },
    };
    this.sendMessage(message);
  }

  public muteAllUsersExceptPresenter(meetingId: string, userId: string, mute: boolean, mutedBy: string) {
    const message = {
      header: {
        name: 'MuteAllExceptPresentersCmdMsg',
        meetingId,
        userId,
      },
      body: {
        mute,
        mutedBy,
      },
    };
    this.sendMessage(message);
  }

  public muteUnmuteUser(meetingId: string, userId: string, mute: boolean, mutedBy: string) {
    const message = {
      header: {
        name: 'MuteUserCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
        mute,
        mutedBy,
      },
    };
    this.sendMessage(message);
  }

  public ejectUserFromVoice(meetingId: string, userId: string, ejectedBy: string) {
    const message = {
      header: {
        name: 'EjectUserFromVoiceCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
        ejectedBy,
      },
    };
    this.sendMessage(message);
  }

  public kickUser(meetingId: string, userId: string, ejectedBy: string) {
    const message = {
      header: {
        name: 'EjectUserFromMeetingCmdMsg',
        meetingId,
        userId,
      },
      body: {
        ejectedBy,
        userId,
      },
    };
    this.sendMessage(message);
  }

  public lookUpUser(meetingId: string, userId: string, externalUserId: string) {
    const message = {
      header: {
        name: 'LookUpUserReqMsg',
        meetingId,
        userId,
      },
      body: {
        externalUserId,
        userId,
      },
    };
    this.sendMessage(message);
  }

  public addUserToPresenterGroup(meetingId: string, userId: string, requesterId: string) {
    const message = {
      header: {
        name: 'AddUserToPresenterGroupCmdMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        userId,
      },
    };
    this.sendMessage(message);
  }

  public removeUserFromPresenterGroup(meetingId: string, userId: string, requesterId: string) {
    const message = {
      header: {
        name: 'RemoveUserFromPresenterGroupCmdMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
        userId,
      },
    };
    this.sendMessage(message);
  }

  public handleRequestPresenterGroupEvent(meetingId: string, userId: string, requesterId: string) {
    const message = {
      header: {
        name: 'GetPresenterGroupReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
      },
    };
    this.sendMessage(message);
  }

  public getRoomMuteState(meetingId: string, userId: string) {
    const message = {
      header: {
        name: 'IsMeetingMutedReqMsg',
        meetingId,
        userId,
      },
      body: {},
    };
    this.sendMessage(message);
  }

  public setAllUsersLock(meetingId: string, userId: string, lock: boolean, lockedBy: string, except: string) {
    const message = {
      header: {
        name: 'LockUsersInMeetingCmdMsg',
        meetingId,
        userId,
      },
      body: {
        except,
        lock,
        lockedBy,
      },
    };
    this.sendMessage(message);
  }

  public setUserLock(meetingId: string, userId: string, lock: boolean, lockedBy: string) {
    const message = {
      header: {
        name: 'LockUserInMeetingCmdMsg',
        meetingId,
        userId,
      },
      body: {
        userId,
        lock,
        lockedBy,
      },
    };
    this.sendMessage(message);
  }

  public getLockSettings(meetingId: string, userId: string, requesterId: string) {
    const message = {
      header: {
        name: 'GetLockSettingsReqMsg',
        meetingId,
        userId,
      },
      body: {
        requesterId,
      },
    };
    this.sendMessage(message);
  }

  public saveLockSettings(meetingId: string, userId: string, lockSettings: any, setBy: string) {
    const message = {
      header: {
        name: 'ChangeLockSettingsInMeetingCmdMsg',
        meetingId,
        userId,
      },
      body: {
        disableCam: lockSettings.disableCam,
        disableMic: lockSettings.disableMic,
        disableNote: lockSettings.disableNote,
        disablePrivChat: lockSettings.disablePrivateChat,
        disablePubChat: lockSettings.disablePublicChat,
        hideUserList: lockSettings.hideUserList,
        lockOnJoin: lockSettings.lockOnJoin,
        lockOnJoinConfigurable: lockSettings.lockOnJoinConfigurable,
        lockedLayout: lockSettings.lockedLayout,
        setBy,
      },
    };
    this.sendMessage(message);
  }

  public updateWebcamsOnlyForModerator(
    meetingId: string,
    userId: string,
    webcamsOnlyForModerator: string,
    setBy: string,
  ) {
    const message = {
      header: {
        name: 'UpdateWebcamsOnlyForModeratorCmdMsg',
        meetingId,
        userId,
      },
      body: {
        webcamsOnlyForModerator,
        setBy,
      },
    };
    this.sendMessage(message);
  }

  public changeRole(meetingId: string, userId: string, userIdToChange: string, role: string, changedBy: string) {
    const message = {
      header: {
        name: 'ChangeUserRoleCmdMsg',
        meetingId,
        userId,
      },
      body: {
        changedBy,
        role,
        userIdToChange,
      },
    };
    this.sendMessage(message);
  }

  public queryForWebcamsOnlyForModerator(meetingId: string, userId: string, requestedBy: string) {
    const message = {
      header: {
        name: 'GetWebcamsOnlyForModeratorReqMsg',
        meetingId,
        userId,
      },
      body: {
        requestedBy,
      },
    };
    this.sendMessage(message);
  }

  public queryForGuestPolicy(meetingId: string, userId: string, requestedBy: string) {
    const message = {
      header: {
        name: 'GetGuestPolicyReqMsg',
        meetingId,
        userId,
      },
      body: {
        requestedBy,
      },
    };
    this.sendMessage(message);
  }

  public setGuestPolicy(meetingId: string, userId: string, policy: string, setBy: string) {
    const message = {
      header: {
        name: 'SetGuestPolicyCmdMsg',
        meetingId,
        userId,
      },
      body: {
        policy,
        setBy,
      },
    };
    this.sendMessage(message);
  }

  public responseToGuest(meetingId: string, userId: string, guests: [], approvedBy: string) {
    const message = {
      header: {
        name: 'GuestsWaitingApprovedMsg',
        meetingId,
        userId,
      },
      body: {
        guests,
        approvedBy,
      },
    };
    this.sendMessage(message);
  }

  public approveGuestAccess(meetingId: string, userId: string, guests: [], approvedBy: string) {
    const message = {
      header: {
        name: 'GuestsWaitingApprovedMsg',
        meetingId,
        userId,
      },
      body: {
        guests,
        approvedBy,
      },
    };
    this.sendMessage(message);
  }

  private sendMessage(message: any): void {
    this.sender.send(message);
  }
}
