class listnode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
export default class List {
    constructor() {
        this.firstnode = null;
    }
    add(data) {
        if (this.firstnode == null) {
            this.firstnode = new listnode(data);
            this.lastnode = this.firstnode;
            this.iterator = this.firstnode;
        }
        else {
            this.lastnode = this.lastnode.next = new listnode(data);
        }
    }
    delete() {
        this.iterator.data = this.iterator.next.data;
        this.iterator.next = this.iterator.next.next;
    }
    Next() {
        this.iterator = this.iterator.next;
    }
    get IsNull() {
        return this.iterator == null;
    }
    get Value() {
        return this.iterator.data;
    }
}
//# sourceMappingURL=list.js.map