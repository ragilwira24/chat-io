export class ChatContentModel {
    private _sender!: string;
    private _messageContent!: string;

    get sender(): string {
        return this._sender;
    }

    set sender(value: string) {
        this._sender = value;
    }

    get messageContent(): string {
        return this._messageContent;
    }

    set messageContent(value: string) {
        this._messageContent = value;
    }

    constructor(sender: string, messageContent: string) {
        this._sender = sender;
        this._messageContent = messageContent;
    }
}
