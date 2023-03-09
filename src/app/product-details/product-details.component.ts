import { IProduct } from './../models/iproduct';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number=0;
  product:IProduct|null=null;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute ){
    this.productId=Number(activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(){
    this.product=this.productService.getProductById(this.productId);
    console.log(this.product)
  }

}
