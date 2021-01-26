import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  public generateToken(request:any){
    return this.http.post("http://localhost:8088/login",request,{responseType: 'text'});
  }
  public welcome(token:any){
    let tokenStr='Bearer'+token;
    const headers = new HttpHeaders().set("Authorization " ,tokenStr)
    return this.http.get("http://localhost:8088/employee",{headers,responseType: 'text'});
  }
}
