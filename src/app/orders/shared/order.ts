import { List } from './list';

export class Order {
    lists: List[];
    date: Date;
    total: any;

    constructor(lists: List[], date: Date, total: any) {
        this.lists = lists;
        this.date = date;
        this.total = total;
    }
}
