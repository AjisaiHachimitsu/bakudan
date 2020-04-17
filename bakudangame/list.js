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
        }
        this.lastnode.next = new listnode(data);
    }
    foreach(func) {
        let it = this.firstnode;
        while (it.next == null) {
            func(it.data);
        }
    }
}
//# sourceMappingURL=list.js.map