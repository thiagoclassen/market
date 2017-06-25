import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product';
import { ProductService } from './shared/product.service';
import { FormControl } from '@angular/forms';
import { DialogsService } from '../dialog/dialogs.service';
import { SearchPipe } from '../shared/search.pipe';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  products: Product[];
  listProducts: Product[];
  productCtrl: FormControl;
  filteredProducts: any;

  constructor(private productService: ProductService, private dialogService: DialogsService) {
    this.products = [];
    this.listProducts = [];
    this.productCtrl = new FormControl();
    this.filteredProducts = this.productCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterProducts(name));
  }

  ngOnInit() {
    this.getData();
  }

  filterProducts(val: any) {
    return val ? this.products.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : this.products;
  }

  openDialog() {
    this.dialogService
      .addProduct()
      .subscribe(res => this.getData());
  }

  getData() {
    this.productService.getProductList().subscribe(response => {
      this.products = response;
    });
  }

}
