import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { IpAddress } from './IpAddress';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://18.207.144.175:9090/products'; //for aws - you enter ip addy in each service files
  // baseUrl: string = `http://${IpAddress}:9090/products`;       //for aws - you enter ip addy in only one place
  // baseUrl: string = 'http://localhost:9090/products';
  constructor(public http: HttpClient) {}

  loadAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/findAllProducts', {
      responseType: 'json',
    });
  }

  storeProduct(product: Product): Observable<string> {
    return this.http.post(this.baseUrl + '/storeProduct', product, {
      responseType: 'text',
    });
  }
}
