enum MessageEnums {
	MESSAGE = 'message',
	CALL = 'call'
}

type BaseMessemberMessage = {
	id: string;
	timestampSend: number;
	timestampRead: number;
	messageType: MessageEnums;
};

enum TextMessageReplyStatus {
	REPLIED = 'replied',
	NORMAL = 'normal'
}

type MessageWithReplyFields = {
	replied?: boolean;
	repliedReferenceId?: number;
};

type TextMessage<T extends TextMessageReplyStatus = TextMessageReplyStatus.NORMAL> =
	BaseMessemberMessage & {
		messageType: MessageEnums.MESSAGE;
		messageContent: string;
		attachments?: string[];
	} & (T extends TextMessageReplyStatus.REPLIED ? MessageWithReplyFields : {});

type CallMessage = BaseMessemberMessage & {
	messageType: MessageEnums.CALL;
	callDuration: number; // seconds
	callStatus: 'missed' | 'received' | 'dialed';
};

enum ConversationPermissionLevel {
	OPENED = 'opened',
	PROTECTED = 'protected'
}

type ProtectedFields = {
	protectedConversation: true;
	backendId: string;
};

type MessageBoxData<T extends ConversationPermissionLevel = ConversationPermissionLevel.OPENED> = {
	id: string;
	linkUrl: string;
	contactName: string;
	activeAgoTimestamp?: string;
	activityStatus: boolean;
	messages: MessemberMessage[];
	userBlocked: boolean;
} & (T extends ConversationPermissionLevel.PROTECTED ? ProtectedFields : {});

type MessemberMessage = TextMessage | CallMessage;
