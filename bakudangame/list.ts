
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
    private iterator: listnode<T>;
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
        }
        this.lastnode.next = new listnode<T>(data);
    }
    foreach(func: (item: T) => any)
    {
        let it = this.firstnode;
        while (it.next == null)
        {
            func(it.data)
        }

    }
}
