import { productList } from './../models/productList';
import { IProduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}
  getAllProducts():IProduct[]{
    return productList
  }
  getProductById(productId:number):IProduct{
    return productList.filter(function(product){
      return product.id==productId
    })[0];
  }
}
