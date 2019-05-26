export class LinkedList {
    public head: LinkedListNode = null;
    public tail: LinkedListNode = null;

    public append(n: any): LinkedList {
        const newNode: LinkedListNode = new LinkedListNode(n);
        if (!this.head) {
            this.head = newNode;
        }
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        return this;
    }

    public prepend(n: any): LinkedList {
        const nextLink: LinkedListNode = new LinkedListNode(n, this.head);
        this.head = nextLink;
        if (!this.tail) {
            this.tail = nextLink;
        }
        return this;
    }
}

export class LinkedListNode {
    public value: any = null;
    public next: LinkedListNode = null;

    constructor(v: any, n: LinkedListNode = null) {
        this.value = v;
        this.next = n;
    }
}