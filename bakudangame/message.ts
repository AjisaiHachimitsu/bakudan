export default class Message
{
    private static messageWindow: HTMLElement;
    static start(messageWindow0: HTMLElement)
    {
        this.messageWindow = messageWindow0;
    }
    static ClearMessage():void
    {
        this.messageWindow.innerHTML = "";
    }
    static AddMessage(message:string,collor:string="initial"): void
    {
        this.messageWindow.innerHTML +='<span style="color:'+collor+'">'+ message+'</span>';
    }
    static BeginNewLine(): void
    {
        this.messageWindow.innerHTML += '<br>';
    }
    static AddImage(imgPath: string): void
    {
        this.messageWindow.innerHTML += '<img src="' + imgPath + '"/>';
    }
}