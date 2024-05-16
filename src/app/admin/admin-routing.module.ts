import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PostProductFAQComponent } from './components/post-product-faq/post-product-faq.component';




const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'dashboard', component: DashboardComponent},
  {path:'category', component:PostCategoryComponent},
  {path: 'product', component:PostProductComponent},
  {path: 'post-coupons', component: PostCouponComponent},
  {path: 'coupons', component: CouponsComponent},
  {path: 'Orders', component:OrdersComponent},
  {path: 'faq/:productId', component: PostProductFAQComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
