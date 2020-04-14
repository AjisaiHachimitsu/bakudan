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
    BeginNewLine() {
        this.messageWindow.innerHTML += '<br>';
    }
    AddImage(imgPath) {
        this.messageWindow.innerHTML += '<img src="' + imgPath + '"/>';
    }
}
//# sourceMappingURL=message.js.map