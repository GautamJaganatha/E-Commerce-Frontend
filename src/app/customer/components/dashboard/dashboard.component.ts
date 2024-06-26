import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  products: any[] = [];

  searchProductForm! : FormGroup;

  constructor(private customerService: CustomerService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar){}

  ngOnInit(){
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      title : [null,[Validators.required]]
    })
  }

  getAllProducts(){
    this.products = [];
    this.customerService.getAllProducts().subscribe(res =>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg:base64', + element.byteImg;
        this.products.push(element);
      });
    })
  }

  submitForm(){
    this.products = [];
    const title = this.searchProductForm.get('title')!.value
    this.customerService.getAllProductsByName(title).subscribe(res =>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg:base64', + element.byteImg;
        this.products.push(element);
      });
    })
  }

  addToCart(productId: any) {
    console.log(productId);
    this.customerService.addToCart(productId).subscribe( res =>{
      this.snackbar.open('Product Added to Cart Successfully', 'Close', {duration: 5000})
    })
  }
    

}
