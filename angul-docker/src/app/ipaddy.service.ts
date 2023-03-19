import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpaddyService {
  constructor(private httpClient: HttpClient) {}

  public getIpAddy() {
    return '3.94.146.98'; //public ipv4 addy from aws' ec2 instance
  }
}
