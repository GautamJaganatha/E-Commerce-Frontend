import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss']
})
export class PostCategoryComponent {


  categoryForm! :  FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminService : AdminService
  ){  }

  ngOnInit(): void{
    this.categoryForm = this.fb.group({
      name : [null,[Validators.required]],
      description : [null,[Validators.required]],
    })
  }

  addCategory(): void{
    if(this.categoryForm.valid){
      console.log(this.categoryForm.value);
      this.adminService.addCategory(this.categoryForm.value).subscribe((res)=>{
        if(res.id !=null){
          this.snackbar.open('Category Posted successfully','Close', {duration:5000, panelClass: 'error-snackbar'});
        }
      })
    }
    else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
