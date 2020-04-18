
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
    private length: number = 0;
    constructor()
    {
        this.firstnode = new listnode<T>(null);
        this.lastnode = this.firstnode;
    }
    add(data: T)
    {
        this.lastnode.data = data;
        this.lastnode = this.lastnode.next = new listnode<T>(null);
        this.length++;
    }
    delete()
    {
        if (this.iterator.next === this.lastnode)
        {
            this.lastnode = this.iterator;
            this.lastnode.data = null;
        }
        else
        {
            this.iterator.data = this.iterator.next.data;
            this.iterator.next = this.iterator.next.next;
        }

        this.length--;
    }
    Next()
    {
        this.iterator = this.iterator.next;
    }
    First()
    {
        this.iterator = this.firstnode;
    }
    get IsNull(): boolean
    {
        return this.iterator.data == null;
    }
    get Value(): T
    {
        return this.iterator.data;
    }
    set Value(data: T)
    {
        this.iterator.data = data;
    }
    get Length()
    {
        return this.length;
    }
}
