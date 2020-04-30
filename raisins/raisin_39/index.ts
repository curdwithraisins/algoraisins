import { LinkedListNode } from "../../data-structures/LinkedList";

export const sortList = (node: LinkedListNode = null) => {
    if (!node || !node.next) {
        return node;
    }

    const middle = findMiddle(node);
    const rightList = middle.next;
    console.log(middle);
    middle.next = null;
    console.log(middle);
    const leftRes = sortList(node);
    const rightRes = sortList(rightList);

    return mergeSort(rightRes, leftRes);
};

const findMiddle = (node: LinkedListNode) => {
    let a = node;
    let b = node;
    while (b.next !== null && b.next.next !== null) {
        a = a.next;
        b = b.next.next;
    }
    return a;
};

const mergeSort = (a: LinkedListNode, b: LinkedListNode) =>  {
    let res = null;
    if (a == null) {
        return b;
    }
    if (b == null) {
        return a;
    }
    if (a.value <= b.value) {
        res = a;
        res.next = mergeSort(a.next, b);
    } else {
        res = b;
        res.next = mergeSort(a, b.next);
    }
    return res;
};
