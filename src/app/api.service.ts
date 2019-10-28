import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Projects {
  projectName: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = '../data/backData.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.url);
  }
}
