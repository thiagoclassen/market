import { Client } from '../../clients/shared/client';
import { Product } from '../../products/shared/product';

export class List {
    client: Client;
    products: Product[];
    deliveryDate: Date;
    total: any;
}
