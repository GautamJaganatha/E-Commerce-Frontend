import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterial } from '../DemoAngularMaterial';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    DemoAngularMaterial,
    HttpClientModule
  ]
})
export class CustomerModule { }
