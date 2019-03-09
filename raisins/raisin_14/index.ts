export interface IOrdersIdsList {
    record(string): void,
    get_last(number): string[]
}

export class ordersIdsList implements IOrdersIdsList {
    private ordersIds: string[] = [];
    private readonly n: number = 1;

    // We set N to 1 as default to have at least one value in the log
    constructor (N: number = 1) {
        if (N > 0) {
            this.n = N;
        }
    };

    /** As we set N when create a new object and we need to have a list with this length
     * we should check how many values we already have in the list and remove first old value from the list
     */
    public record (order_id: string): void {
        if (this.ordersIds.length === this.n) {
            this.ordersIds.shift();
        }
        this.ordersIds.push(order_id);
    };

    public get_last (i: number): string[] {
        return this.ordersIds.slice(this.ordersIds.length - i);
    };
}