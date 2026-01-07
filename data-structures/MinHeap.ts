/**
 * A min-heap is a binary tree where each node is less than or equal to its children.
 * The root of the tree is the smallest element in the heap.
 * The heap is a complete binary tree, which means that all the levels of the tree are filled except possibly the last level.
 * The last level is filled from left to right.
 */

export class MinHeap {
    private heap: any[];
    constructor() {
        this.heap = [];
    }
    get peek(): any {
        return this.heap[0];
    }
    get size(): number {
        return this.heap.length;
    }
    add(v: any): void {
        this.heap.push(v);
        this.heapifyUp();
    }
    delete(v: any): void {
        const index = this.heap.indexOf(v);
        if (index === -1) {
            return;
        }
        if (index === this.heap.length - 1) {
            this.heap.pop();
            return;
        }
        this.heap[index] = this.heap.pop();
        this.heapifyDown(index);
        this.heapifyUp();
    }
    toString(): void {
        let inLine: number[] = [0];
        console.log(this.heap[0]);
        while (inLine.length > 0) {
            let newInLine = [];
            let str = "";
            for (let i = 0; i < inLine.length; i++) {
                const index = inLine[i];
                if (index === undefined) continue;
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                if (left < this.heap.length) {
                    str += this.heap[left] + " ";
                    newInLine.push(left);
                }
                if (right < this.heap.length) {
                    str += this.heap[right] + " ";
                    newInLine.push(right);
                }
            }
            console.log(str);
            inLine = newInLine;
        }
    }
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parent]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            }
        }
    }
    private heapifyDown(index: number): void {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}