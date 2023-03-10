import { IProduct } from './../models/iproduct';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number=0;
  product:any;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router ){
    this.productId=Number(activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(){
    this.productService.getProductById(this.productId).subscribe(
      {
        next:(res)=>{
          this.product=res
        }
      }
    );
  }

  delete(id:any){
    this.productService.deleteProduct(id).subscribe(
      ()=>{}
    )
    this.router.navigate(['/products'])
  }
}
