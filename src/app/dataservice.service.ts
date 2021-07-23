import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  readonly url_buyer
  readonly url_seller

  constructor(private httpClient: HttpClient ) {
    this.url_buyer="http://localhost:3000/buyer"
    this.url_seller="http://localhost:3000/seller"
   }

   getdetail_buyer(){
     console.log(this.url_buyer)
      return this.httpClient.get<any>(this.url_buyer)
   }

   adddetail_buyer(data){
     console.log(data)
     return this.httpClient.post<any>(this.url_buyer,data)
   }

   getdetail_seller(){
    console.log(this.url_seller)
     return this.httpClient.get<any>(this.url_seller)
  }

  adddetail_seller(data){
    return this.httpClient.post<any>(this.url_seller,data)
  }
}


