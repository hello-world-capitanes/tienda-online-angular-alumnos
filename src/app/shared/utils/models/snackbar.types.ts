export class MessageType {
    _status: string;
    _icon: string;
    _color: string;

    constructor(status: string, icon: string, color: string) {
        this._status = status;
        this._icon = icon;
        this._color = color;
    }
    
    get status(): string {
        return this._status;
    }
    get icon(): string {
        return this._icon;
    }
    get color(): string {
        return this._color;
    }
}

export const SNACKBAR_MESSAGE_TYPES = {
    info:       new MessageType("info", "info", "#2583DB"),
    correct:    new MessageType("correct", "check", "#1DC65C"),
    warning:    new MessageType("warn", "warning", "#EBD41C"),
    error:      new MessageType("error", "error", "#EB0119"),
};