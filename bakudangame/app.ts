import Field from "field.js"

class HtmlIo//仮ネーム
{
    table: HTMLTableElement;
    width: number;
    height: number;
}

window.onload = () =>
{
    alert("hello");
    let htmlIo: HtmlIo;
    htmlIo.table = (document.getElementById("maintable")) as HTMLTableElement;
    let field = new Field(9, 5);
    alert(field.mainfield);
};