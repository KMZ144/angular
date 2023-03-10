import { IProduct } from './../models/iproduct';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId:number=0;
  product:any;
  form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]),
    price:new FormControl('',[Validators.required,Validators.min(1),Validators.pattern('^([0-9])*$')]),
    quantity:new FormControl('',[Validators.required,Validators.min(1),Validators.pattern('^([0-9])*$')]),
    imgUrl:new FormControl()
})
  constructor (private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router ){
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.productId=Number(params.get('id'))
      this.form.controls.name.setValue('');
      this.form.controls.price.setValue('');
      this.form.controls.quantity.setValue('');
      this.form.controls.imgUrl.setValue('');
    })
  }
  ngOnInit(): void {
    if(this.productId != 0){
      this.productService.getProductById(this.productId).subscribe((res)=>{
        this.product=res
        this.form.controls.name.setValue(this.product.name);
        this.form.controls.price.setValue(this.product.price);
        this.form.controls.quantity.setValue(this.product.quantity);
        this.form.controls.imgUrl.setValue(this.product.imgUrl);
      });
    }


  }
  get getName(){
    return this.form.controls.name
  }
  get getPrice(){
    return this.form.controls.price
  }
  get getQuantity(){
    return this.form.controls.quantity
  }
  submitForm(e:Event){
    e.preventDefault();
    if (this.form.status=='VALID'){
      if(this.productId==0){
        this.productService.addProduct(this.form.value).subscribe(
          {
            next:(res)=>{
              this.router.navigate(['/products'])
            }
          }
        )
      }
      else{
        this.productService.editProduct(this.productId,this.form.value).subscribe(
          {
            next:(res)=>{
              this.router.navigate(['/products'])
            }
          }
        )
      }
      }
  }
}
