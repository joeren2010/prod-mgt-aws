import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { IpAddress } from './IpAddress';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //baseUrl: string = 'http://3.94.146.98:9292/products'; //for aws - you enter ip addy in each service files
  // baseUrl: string = `http://${IpAddress}:9292/products`;       //for aws - you enter ip addy in only one place
  // baseUrl: string = 'http://localhost:9292/products';
  constructor(public http: HttpClient, private ipaddyService: IpaddyService) {}

  myIp: string = this.ipaddyService.getIpAddy();
  baseUrl: string = 'http://' + this.myIp + ':9292/products';

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
