export class Dequeue {
    private queue: number[];
    constructor() {
        this.queue = [];
    }
    get front(): number {
        return this.queue ? this.queue[0] : null;
    }
    get back(): number {
        return this.queue.length ? this.queue[this.queue.length - 1] : null;
    }
    pushBack(v: number): void {
        this.queue.push(v);
    }
    popBack(): void {
        this.queue.pop();
    }
    pushFront(v: number): void {
        this.queue.unshift(v);
    }
    popFront(): void {
        this.queue.shift();
    }
}