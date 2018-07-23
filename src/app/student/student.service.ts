import { Injectable } from '@angular/core';
import { Student } from "./Student";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {

  private apiUrl = 'http://localhost:8080/v1/personal-info';

  private _student: Student;

  private _students: Student[];

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

  findAll(): Observable<Student[]>  {
      return this.http.get<Student[]>(this.apiUrl);
  }

  deleteStudentById(sid:number): Observable<Object> {
	  return this.http.delete(this.apiUrl +"/"+ sid);
  }

  addStudent(): Observable<Object> {
    console.log("addStudent-service- "+JSON.stringify(this._student));
    return this.http.post(this.apiUrl,this._student);
  }

  // updateStudent(): void {
  //   this.http.put(this.apiUrl +"/"+ this._student.sid,this._student).subscribe(
  //     data => {
  //         console.log("PUT Request is successful ", data);
  //         this.findAll();
  //     },
  //     error => {
  //         console.log("Error", error);
  //     });
  //  }

}
