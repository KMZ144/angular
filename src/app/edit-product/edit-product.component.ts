import { IProduct } from './../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product:IProduct|null=null;
  price:string='';
  quantity:number=0;
  imgUrl:string='';
  name:string=''
  productId:number=0;
  constructor (private productService:ProductService,private activatedRoute:ActivatedRoute ){
    this.productId=Number(activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.product=this.productService.getProductById(this.productId);
  }
  validatePrice(price:string){
    let isValidPrice:boolean=false
    const regex=new RegExp('^([0-9])*$');
    if(Number(price)<=0){
      isValidPrice=true
    }
    else if (!regex.test(price)){
      isValidPrice=true
    }
    else if (price=''){
      isValidPrice=true
    }
    return isValidPrice;
  }
  validateName(name:string){

  }
  validateQuantity(qty:number){

  }
  validateImg(){

  }
}
