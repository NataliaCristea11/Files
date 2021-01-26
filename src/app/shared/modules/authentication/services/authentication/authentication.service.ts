import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};
@Injectable()
export class AuthenticationService {

  private endpoints = {
    login: () => 'http://localhost:8088/login'
  };

  constructor(
    private http: HttpClient
  ) { }

  static getToken() {
    return localStorage.getItem('token');
  }

  login(credentials: any): Observable<any> {
    localStorage.removeItem('token')
    
    return this.http.post(this.endpoints.login(), credentials, httpOptions)
      .pipe(
        map((response: any) => {
        console.log(response);
          localStorage.setItem('token', response.Authorization);
          return response;
        })
      );
  }

}


