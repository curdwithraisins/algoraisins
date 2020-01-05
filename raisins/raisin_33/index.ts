import { LinkedList } from '../../data-structures/LinkedList';

export const removeNode = (list: LinkedList, k: number) => {
    if (k == 0) return list;
    const newList = new LinkedList();
    let head = list.head;
    for (let i = 0; i < k - 1; i++) {
        newList.append(head.value);
        head = head.next;
    }
    head = head.next;
    while (head !== null) {
        newList.append(head.value);
        head = head.next;
    }
    return newList;
};