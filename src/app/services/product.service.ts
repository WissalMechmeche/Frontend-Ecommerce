import { ProductCategory } from './../common/product-category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  

  private baseUrl  = 'http://127.0.0.1:8000/api/product' ;

  private categoryUrl = 'http://127.0.0.1:8000/api/category';

  private customerUrl = 'http://127.0.0.1:8000/api/customers'

  constructor( private httpClient : HttpClient) { }

  getProductList(): Observable<Product[]>{

    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getProductListByCategory(theCategoryId : number): Observable<Product[]>{

    // need to build URL base on category ID 
    const searchUrl= `${this.baseUrl}/findByCategory/${theCategoryId}`;

    return this.httpClient.get<Product[]>(searchUrl);
  }
  
  getProductCategories():Observable<ProductCategory[]> {
    
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl);
    
  }

  searchProducts(theKeyword: string): Observable<Product[]> {

     // need to build URL base name keyword
     const searchUrl= `${this.baseUrl}/search/${theKeyword}`;
      
    return this.httpClient.get<Product[]>(searchUrl);
  }
  
  getProduct(theProductId: number):Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl) 
  }
  consulterProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }
  updateProduct(prod: Product): Observable<Product> {
    const url = `${this.baseUrl}/update/${prod.id}`;
    return this.httpClient.put<Product>(url,prod);
  }
  deleteProduct(id: number) {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
  getCategoryList(): Observable<ProductCategory[]>{
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl);
  }
  consulterCategory(id: number): Observable<ProductCategory> {
    const url = `${this.categoryUrl}/${id}`;
    return this.httpClient.get<ProductCategory>(url);
  }
  addCategory(cat: ProductCategory): Observable<ProductCategory> {
    const url = `${this.categoryUrl}/create/`;
    return this.httpClient.post<ProductCategory>(url,cat);
  }
  updateCategory(cat: ProductCategory): Observable<ProductCategory> {
    const url = `${this.categoryUrl}/update/${cat.id}`;
    return this.httpClient.put<ProductCategory>(url,cat);
  }
  deleteCategory(id: number) {
    const url = `${this.categoryUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.customerUrl);
  }
  consulterCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.httpClient.get<Customer>(url);
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.customerUrl}/update/${customer.id}`;
    return this.httpClient.put<Customer>(url,customer);
  }
  deleteCustomer(id: number) {
    const url = `${this.customerUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
