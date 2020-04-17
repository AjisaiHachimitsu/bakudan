
class listnode<T>
{
    data: T
    next: listnode<T> = null;
    constructor(data: T)
    {
        this.data = data;
    }
}


export default class List<T>
{
    private firstnode: listnode<T>;
    private lastnode: listnode<T>;
    private iterator: listnode<T>
    constructor()
    {
        this.firstnode = null;
    }
    add(data: T)
    {
        if (this.firstnode == null)
        {
            this.firstnode = new listnode<T>(data);
            this.lastnode = this.firstnode;
            this.iterator = this.firstnode;
        }
        else
        {
            this.lastnode = this.lastnode.next = new listnode<T>(data);
        }
    }
    delete()
    {
        this.iterator.data = this.iterator.next.data;
        this.iterator.next = this.iterator.next.next;
    }
    Next()
    {
        this.iterator = this.iterator.next;
    }
    get IsNull(): boolean
    {
        return this.iterator == null;
    }
    get Value(): T
    {
        return this.iterator.data;
    }
}
