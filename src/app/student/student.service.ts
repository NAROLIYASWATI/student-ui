import { Injectable } from '@angular/core';
import { Student } from "./Student";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {

  private apiUrl = 'http://localhost:8080/v1/personal-info';

  private _student: Student;

  private studentObservable : Observable<Student>;

  get student(){
    return this._student;
  }

  set student(student:Student){
    this._student=student;
  }
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Student[]>  {
    return this.http.get<Student[]>(this.apiUrl);
  }

  findById(id: number): Observable<Student> {
    return null;
  }

  addStudent(): void {
    console.log("addStudent-service- "+JSON.stringify(this._student));
    this.http.post(this.apiUrl,this._student)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );      
  }

   deleteStudentById(sid: number): void {
	  this.http.delete(this.apiUrl +"/"+ sid).subscribe(
      data => {
          console.log("PUT Request is successful ", data);
      },
      error => {
          console.log("Rrror", error);
      }); 
   }

   updateStudent(): void {
    this.http.put(this.apiUrl,this._student).subscribe(
      data => {
          console.log("PUT Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
   }

}
