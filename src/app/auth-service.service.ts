import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    const url = 'https://api.asgardeo.io/t/massil2016/oauth2/token';
    const headers = {
      Authorization: 'Basic RlVjRnBzdGYwSWlVNml0S1ltRG5qd0dBWjVVYTptYTRMZmhtYjBSeG5RN1d1UDNOTG12eWRsZFlwT2REcHltZGlNRWowSU0wYQ==',
       'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}
