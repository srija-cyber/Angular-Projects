import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/tasks';
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTasks(task : Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task);
  }

  editTasks(id : Number, task : Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task)
  }

  deleteTasks(id : Number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
