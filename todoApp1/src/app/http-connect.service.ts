import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectService {

  options;

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders({})
    this.options={
      headers:headers
    }
   }
   getCountryDetails():Observable<any>{
     
     var requestObj=JSON.stringify({});
     return this.http.get('https://restcountries.eu/rest/v2/all',this.options)
   }
   getCountriesByName(searchKey):Observable<any>{
     return this.http.get('https://restcountries.eu/rest/v2/name/'+searchKey,this.options)
   }
}
