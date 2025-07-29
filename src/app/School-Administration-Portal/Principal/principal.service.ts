import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Principal } from '../../../principal-model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private apiUrl = 'http://localhost:3000/principals';

  constructor(private http: HttpClient) { }

  getPrincipals(): Observable<Principal[]> {
    return this.http.get<Principal[]>(this.apiUrl);
  }

  getPrincipal(id: number): Observable<Principal> {
    return this.http.get<Principal>(`${this.apiUrl}/${id}`);
  }

  addPrincipal(principal: Principal): Observable<Principal> {
    return this.http.post<Principal>(this.apiUrl, principal);
  }

  updatePrincipal(principal: Principal): Observable<Principal> {
    return this.http.put<Principal>(`${this.apiUrl}/${principal.id}`, principal);
  }

  deletePrincipal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}