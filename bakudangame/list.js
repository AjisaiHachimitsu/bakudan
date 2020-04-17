class listnode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
export default class list {
    add(data) {
        if (this.lastnode == undefined) {
            this.lastnode = new listnode(data);
        }
        this.lastnode.next = new listnode(data);
    }
}
//# sourceMappingURL=list.js.map