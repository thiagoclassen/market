import { List } from './list';

export class Order {
    name: string;
    lists: List[];
    date: Date;
    total: any;

    constructor(name: string, lists: List[], date: Date, total: any) {
        this.name = name;
        this.lists = lists;
        this.date = date;
        this.total = total;
    }
}
