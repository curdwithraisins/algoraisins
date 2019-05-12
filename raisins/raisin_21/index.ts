import List from '../../data-structures/LinkedList';

export const intersec = (listA: List, listB: List): List => {
    const hashTable = [];
    let node = listA;
    do {
        hashTable[node.current] = true;
    } while (node = node.next());

    node = listB;
    while (!hashTable[node.current]) {
        node = node.next();
    }
    return node;
};