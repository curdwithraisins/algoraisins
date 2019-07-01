import { LinkedList } from '../../data-structures/LinkedList';

export const sortedList = (k: number, list: LinkedList): LinkedList => {
    let current = list.head;
    let listAfter = new LinkedList(), listBefore = new LinkedList();
    do {
        current.value < k ? listBefore.append(current.value) : listAfter.append(current.value);
    } while (current = current.next);

    listBefore.tail.next = listAfter.head;
    listAfter.head.prev = listBefore.tail;
    listBefore.tail = listAfter.tail;

    return listBefore;
};