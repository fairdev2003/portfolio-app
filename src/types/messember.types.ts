enum MessageEnums {
	MESSAGE = 'message',
	CALL = 'call',
	IMAGE = "image"
}

type BaseMessemberMessage = {
	id: string;
	timestampSend: number;
	timestampRead: number;
	messageType: MessageEnums;
	messageUserSide: MessageUserSide.SENDER | MessageUserSide.RECIPIENT;
};

enum TextMessageReplyStatus {
	REPLIED = 'replied',
	NORMAL = 'normal'
}

type MessageWithReplyFields = {
	// if message is replied it will handle replied reference id also so its required to function
	replied: boolean;
	// it will tell ChatBox component which message it will referenced to
	repliedReferenceId?: number;
};

enum MessageUserSide {
	SENDER = 'sender', // left side
	RECIPIENT = 'recipient' // right side
}

type TextMessage<T extends TextMessageReplyStatus = TextMessageReplyStatus.NORMAL> =
	BaseMessemberMessage & {
		messageType: MessageEnums.MESSAGE;
		messageContent: string;
		// TODO: i guess i can type this to ImageMessage type
		attachments?: string[];
	} & (T extends TextMessageReplyStatus.REPLIED ? MessageWithReplyFields : {});

type CallMessage = BaseMessemberMessage & {
	messageType: MessageEnums.CALL;
	callDuration: number; // seconds
	callStatus: 'missed' | 'received' | 'dialed';
};

type ImagesLinks = string[];

type ImageMessage<T extends TextMessageReplyStatus = TextMessageReplyStatus.NORMAL> =
	BaseMessemberMessage & {
		// message type will tell main component what component will be used for messages
		messageType: MessageEnums.IMAGE;
		// if there is one image message 
		// will contain ImageMessage Component, 
		// if there is more load GalleryMessage Component
		images?: ImagesLinks;  
} & (T extends TextMessageReplyStatus.REPLIED ? MessageWithReplyFields : {})

enum ConversationPermissionLevel {
	OPENED = 'opened',
	PROTECTED = 'protected'
}

// protected fields will handle 
// all messages that will comes from backend instead of local files
type ProtectedFields = {
	protectedConversation: true;
	backendId: string;
};

// what fields will local messages have
type OpenedFields = {
	messages: MessemberMessage[];
};

type MessageBoxData<T extends ConversationPermissionLevel = ConversationPermissionLevel.OPENED> = {
	id: string;
	linkUrl: string;
	contactName: string;
	activeAgoTimestamp?: number;
	activityStatus: boolean;
	userBlocked: boolean;
} & (T extends ConversationPermissionLevel.PROTECTED ? ProtectedFields : OpenedFields);

// global type for all 
type MessemberMessage = TextMessage | CallMessage | ImageMessage;

// type testing
const openedConversation: MessageBoxData<ConversationPermissionLevel.OPENED> = {
	id: '123',
	linkUrl: '/chat/123',
	contactName: 'Skurwiel',
	activityStatus: true,
	messages: [],
	userBlocked: false
};

const protectedConversation: MessageBoxData<ConversationPermissionLevel.PROTECTED> = {
	id: '125',
	linkUrl: '/chat/125',
	contactName: 'Fredi Kamionka gmina burze',
	activityStatus: true,
	userBlocked: false,
	protectedConversation: true,
	backendId: 'backend-xyz-125'
};
