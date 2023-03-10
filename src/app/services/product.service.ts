import { productList } from './../models/productList';
import { IProduct } from './../models/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string="http://localhost:3000/products"
  constructor(private http:HttpClient) {}
  getAllProducts(){
    return this.http.get(this.baseUrl)
  }
  getProductById(productId:number){
    return this.http.get(`${this.baseUrl}/${productId}`)
  }
  addProduct(product:any){
    return this.http.post(this.baseUrl,product)
  }
  editProduct(id:any,product:any){
    return this.http.put(`${this.baseUrl}/${id}`,product)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
