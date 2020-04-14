export default class Message {
    static start(messageWindow0) {
        this.messageWindow = messageWindow0;
    }
    static ClearMessage() {
        this.messageWindow.innerHTML = "";
    }
    static AddMessage(message, collor = "initial") {
        this.messageWindow.innerHTML += '<span style="color:' + collor + '">' + message + '</span>';
    }
    static BeginNewLine() {
        this.messageWindow.innerHTML += '<br>';
    }
    static AddImage(imgPath) {
        this.messageWindow.innerHTML += '<img src="' + imgPath + '"/>';
    }
}
//# sourceMappingURL=message.js.map