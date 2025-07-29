import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../../../school-model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://localhost:3000/schools';

  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.apiUrl);
  }

  getSchool(id: number): Observable<School> {
    return this.http.get<School>(`${this.apiUrl}/${id}`);
  }

  addSchool(school: School): Observable<School> {
    return this.http.post<School>(this.apiUrl, school);
  }

  updateSchool(school: School): Observable<School> {
    return this.http.put<School>(`${this.apiUrl}/${school.id}`, school);
  }

  deleteSchool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}