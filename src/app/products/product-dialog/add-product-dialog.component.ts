
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';


// TODO: Finish.

@Component({
    selector: 'add-Product-dialog',
    templateUrl: './add-Product-dialog.html',
    styleUrls: ['./add-Product-dialog.scss'],
    providers: [ProductService]
})
export class AddProductDialog {

    public name: string;

    constructor(public dialogRef: MdDialogRef<AddProductDialog>, private ProductService: ProductService) { }

    public AddProduct() {
        const product = new Product(this.name, 'kg');
        this.ProductService.addProduct(product).subscribe();
        this.dialogRef.close(Product);
    }

}
