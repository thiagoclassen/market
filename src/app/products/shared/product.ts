export class Product {
    name: string;
    unit: string;
    qtd?: number;
    price?: number;
    total?: number;

    constructor(name: string, unit: string) {
        this.name = name;
        this.unit = unit;
    }
}
