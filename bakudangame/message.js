export default class Message {
    constructor(messageWindow0) {
        this.messageWindow = messageWindow0;
    }
    ClearMessage() {
        this.messageWindow.innerHTML = "";
    }
    AddMessage(message, collor = "initial") {
        this.messageWindow.innerHTML += '<span style="color:' + collor + '">' + message + '</span>';
    }
}
//# sourceMappingURL=message.js.map