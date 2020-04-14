export enum fieldStatus
{
    NONE,
    BLOCK,
    BOMB,
    EXPLOSION

};
export default class Field
{
    readonly width: number;
    readonly height: number;
    private mainfield: number[][];
    GetField(i: number, j: number): fieldStatus
    {
        return this.mainfield[i][j];
    }

    constructor(width0: number, height0: number)
    {
        this.width = width0;
        this.height = height0;
        this.mainfield = [];
        for (let i = 0; i < this.height; i++)
        {
            this.mainfield[i] = [];
            for (let j = 0; j < this.width; j++)
            {
                if (i % 2 == 0 && j % 2 == 0)
                {
                    this.mainfield[i][j] = fieldStatus.BLOCK;
                }
                else
                {
                    this.mainfield[i][j] = fieldStatus.NONE;
                }
                if (i == 0 || i == this.height - 1 || j == 0 || j == this.width - 1)
                {
                    this.mainfield[i][j] = fieldStatus.BLOCK;
                }
            }
        }
    }
}