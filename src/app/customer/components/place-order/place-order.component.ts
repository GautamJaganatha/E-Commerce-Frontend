import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {

  orderForm! : FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog
  ){

  }

  ngOnInit(){
    this.orderForm = this.fb.group({
      address : [null,[Validators.required]],
      description : [null],
    })
  }

  placeOrder(){
    console.log(this.orderForm.value);
    this.customerService.placeOrder(this.orderForm.value).subscribe(res =>{
      if(res.id != null){
        this.snackbar.open("Order placed successfully", "Close",{
          duration: 5000
        })
        this.router.navigateByUrl("/customer/my-orders");
        this.closeForm();
      }else {
        this.snackbar.open("Something went wrong", "Close", {duration : 5000})
      }
    })
  }

  closeForm(){
    this.dialog.closeAll();
  }
}
