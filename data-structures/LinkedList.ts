/**
 * A Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory.
 * Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.
 * In its most basic form, each node contains: data, and a reference to the next node in the sequence.
 * This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration.
 * More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions.
 * A drawback of linked lists is that access time is linear.
 */

export class LinkedList {
    public head: LinkedListNode = null;
    public tail: LinkedListNode = null;

    public append(n: any): LinkedList {
        const newNode: LinkedListNode = new LinkedListNode(n, { prev: this.tail });
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
        const newNode: LinkedListNode = new LinkedListNode(n, { next: this.head });
        if (this.head) {
            this.head.prev = newNode;
        }
        if (!this.tail) {
            this.tail = newNode;
        }
        this.head = newNode;
        return this;
    }
}

export class LinkedListNode {
    public value: any = null;
    public prev: LinkedListNode = null;
    public next: LinkedListNode = null;

    constructor(value: any, { next = null, prev = null }: { next?: LinkedListNode, prev?: LinkedListNode }) {
        this.value = value;
        this.next = next;
        this.prev= prev;
    }

    public add(v: any): LinkedListNode {
        const newNode = new LinkedListNode(v, { next: this.next, prev: this});
        this.next = newNode;
        return this.next;
    }

    public remove(): LinkedListNode {
        this.prev.next = this.next;
        return this.next;
    }
}