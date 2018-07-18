import { Injectable } from '@angular/core';
import { Student } from "./Student";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {

  private apiUrl = 'http://localhost:8080/Students';

  constructor(private http: Http) {
  }

  findAll(): Observable<Student[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Student> {
    return null;
  }

  saveStudent(Student: Student): Observable<Student> {
    return null;
  }

  deleteStudentById(id: number): Observable<boolean> {
    return null;
  }

  updateStudent(Student: Student): Observable<Student> {
    return null;
  }

}
