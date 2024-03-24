import { Injectable } from '@angular/core';
import { HttpClient } from 'httpclient.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://api-hotel-e271.onrender.com/"


//   bookig(category: string){
//     return this.http.get(this.baseUrl,category, this.options)
//   }
}
