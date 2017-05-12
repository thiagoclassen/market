import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'products', component: ProductsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
