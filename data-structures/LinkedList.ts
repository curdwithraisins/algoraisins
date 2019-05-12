export default class List {
    private readonly value: any = null;
    private link: any = null;

    constructor(n: any) {
        this.value = n;
    }

    public get current(): any {
        return this.value;
    };

    public add(n: any): List {
        this.link = new List(n);
        return this.next();
    }

    public next(): List {
        return this.link;
    }
}