import { ProductService } from './../services/product.service';
import { IProduct } from './../models/iproduct';
import { Component } from '@angular/core';
import { productList } from '../models/productList';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:IProduct[]=[];
  constructor(private productService:ProductService){
  }
  ngOnInit(): void {
    this.products=this.productService.getAllProducts()
  }
}
