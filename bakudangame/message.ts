export default class Message
{
    readonly messageWindow: HTMLElement;
    constructor(messageWindow0: HTMLElement)
    {
        this.messageWindow = messageWindow0;
    }
    ClearMessage():void
    {
        this.messageWindow.innerHTML = "";
    }
    AddMessage(message:string,collor:string="initial"): void
    {
        this.messageWindow.innerHTML +='<span style="color:'+collor+'">'+ message+'</span>';
    }
    BeginNewLine(): void
    {
        this.messageWindow.innerHTML += '<br>';
    }
    AddImage(imgPath: string): void
    {
        this.messageWindow.innerHTML += '<img src="' + imgPath + '"/>';
    }
}