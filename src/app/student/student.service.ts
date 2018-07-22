import { Injectable } from '@angular/core';
import { Student } from "./Student";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {

  private apiUrl = 'http://localhost:8080/v1/personal-info';

  private _student: Student;

  get student(){
    return this._student;
  }

  set student(student:Student){
    this._student=student;
  }
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

  addStudent(): Observable<Student> {
    console.log("addStudent------s-------"+this._student.sid);
    console.log("addStudent------s-------"+this._student.fname);
    console.log("inside service")
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: cpHeaders});

    return this.http.post(this.apiUrl,this._student,options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteStudentById(sid: number): Observable<boolean> {
	  return this.http.delete(this.apiUrl +"/"+ sid)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateStudent(): Observable<Student> {
    console.log("updateStudent------s-------"+this._student.sid);
    console.log("updateStudent------s-------"+this._student.fname);
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: cpHeaders});

    return this.http.put(this.apiUrl +"/"+ this._student.sid,this._student,options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
