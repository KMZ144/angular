import { ProductService } from './../services/product.service';
import { IProduct } from './../models/iproduct';
import { Component } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any=[];
  constructor(private productService:ProductService){
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      {
        next:(response)=>{
          this.products=response;
        }
      }
    );
  }
}
