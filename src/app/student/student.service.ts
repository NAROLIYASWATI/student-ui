import { Injectable } from '@angular/core';
import { Student } from "./Student";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {

  private _student: Student;

  private _students: Student[];

  private studentObservable : Observable<Student>;

  private apiUrl = 'http://localhost:8080/v1/personal-info';

  get student(){
    return this._student;
  }

  set student(student:Student){
    this._student=student;
  }

  get students(){
    return this._students;
  }

  set students(students:Student[]){
    this._students=students;
  }

  constructor(private http: HttpClient) {
  }

  findAll(): void  {
    this.http.get<Student[]>(this.apiUrl)
      .subscribe(
        data=>{
          this.students=data;
        },
        error => {
            console.log("Error", error);
        }
    ); 
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
                this.findAll();
            },
            error => {
                console.log("Error", error);
            }
        );      
  }

   deleteStudentById(): void {
	  this.http.delete(this.apiUrl +"/"+ this._student.sid).subscribe(
      data => {
          console.log("DELETE Request is successful ", data);
          let index = this.students.indexOf(this._student, 0);
                if (index > -1)
                {
                    this.students.splice(index, 1);
                    this.findAll();
               }
      },
      error => {
          console.log("Error", error);
      }); 
   }

   updateStudent(): void {
    this.http.put(this.apiUrl +"/"+ this._student.sid,this._student).subscribe(
      data => {
          console.log("PUT Request is successful ", data);
          this.findAll();
      },
      error => {
          console.log("Error", error);
      });
   }

}
