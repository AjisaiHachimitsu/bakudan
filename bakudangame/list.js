class listnode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
export default class List {
    constructor() {
        this.length = 0;
        this.firstnode = new listnode(null);
        this.lastnode = this.firstnode;
    }
    Copy(copyFunction) {
        let a = new List();
        for (this.First(); this.IsNull === false; this.Next()) {
            if (copyFunction == undefined)
                a.add(this.Value);
            else
                a.add(copyFunction(this.Value));
        }
        return a;
    }
    add(data) {
        this.lastnode.data = data;
        this.lastnode = this.lastnode.next = new listnode(null);
        this.length++;
    }
    delete() {
        if (this.iterator.next === this.lastnode) {
            this.lastnode = this.iterator;
            this.lastnode.data = null;
        }
        else {
            this.iterator.data = this.iterator.next.data;
            this.iterator.next = this.iterator.next.next;
        }
        this.length--;
    }
    Next() {
        this.iterator = this.iterator.next;
    }
    First() {
        this.iterator = this.firstnode;
    }
    get IsNull() {
        return this.iterator.data == null;
    }
    get Value() {
        return this.iterator.data;
    }
    set Value(data) {
        this.iterator.data = data;
    }
    get Length() {
        return this.length;
    }
}
//# sourceMappingURL=list.js.map