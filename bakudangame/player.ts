export default class Player
{
    imagePath: string;
    x: number;
    y: number;
    constructor(img: string,x0:number,y0:number)
    {
        this.imagePath = img;
        this.x = x0;
        this.y = y0;
    }
}