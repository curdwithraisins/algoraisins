import { LinkedList, LinkedListNode } from '../../data-structures/LinkedList';

export const intersec = (listA: LinkedList, listB: LinkedList): LinkedListNode => {
    const hashTable = [];
    let currentList: LinkedListNode = listA.head;

    do {
        hashTable[currentList.value] = true;
    } while (currentList = currentList.next);

    currentList = listB.head;
    while (!hashTable[currentList.value]) {
        currentList = currentList.next;
    }
    return currentList;
};