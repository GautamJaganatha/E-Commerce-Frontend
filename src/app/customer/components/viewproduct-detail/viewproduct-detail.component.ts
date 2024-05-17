import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

@Component({
  selector: 'app-viewproduct-detail',
  templateUrl: './viewproduct-detail.component.html',
  styleUrls: ['./viewproduct-detail.component.scss']
})
export class ViewproductDetailComponent {

  productId: number = this.activatedRoute.snapshot.params['productId'];

  product: any;
  FAQs: any[] = [];
  reviews: any[] = [];

  constructor(
    private snackbar: MatSnackBar,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
    ){}



    ngOnInit(){
      this.getProductDetailsById();
    }

    getProductDetailsById(){
      this.customerService.getProductDetailsById(this.productId).subscribe( res =>{
        this.product = res.productDto;
        this.product.processedImg = 'data:image/png;base64,' + res.productDto.byteImg;

        this.FAQs = res.faqDtoList;

        res.reviewDtoList.forEach(element =>{
          element.processedImg = 'data:image/png;base64,' + element.returnedImg;
          this.reviews.push(element);
        })
      })
    }


    addToWishlist(){
      const wishlistDto = {
        productId : this.productId,
        userId: UserStorageService.getUserId()
      }
      this.customerService.addProductToWishlist(wishlistDto).subscribe(res =>{
        if(res.id != null){
          this.snackbar.open("Product Added To Wishlist Successfully!", "Close",{
            duration: 5000
          });
        }else {
          this.snackbar.open("Already In Wishlist", "Error",{
            duration: 5000
          });
        }
      })
    }

}
