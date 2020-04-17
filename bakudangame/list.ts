
class listnode<T>
{
    data: T
    next: listnode<T> = null;
    constructor(data: T)
    {
        this.data = data;
    }
}

export default class list<T>
{
    private lastnode: listnode<T>;
    add(data: T)
    {
        if (this.lastnode == undefined)
        {
            this.lastnode = new listnode<T>(data);
        }
        this.lastnode.next = new listnode<T>(data);
    }

}

