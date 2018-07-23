import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { LiteralArrayExpr } from '../../../../node_modules/@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  private students: Student[];

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit() {
     this.getAllUsers();
  }

  getAllUsers(){
     this.studentService.findAll()
           .subscribe(
        data=>{
          this.students=data;
        },
        error => {
            console.log("Error", error);
        }
    ); 
  }

  deleteStudent(student:Student){
    this.studentService.deleteStudentById(student.sid)
      .subscribe( successs=>{
          let index = this.students.indexOf(student, 0);
              if (index > -1)
              {
                  this.students.splice(index, 1);
                  this.getAllUsers();
              }
            },error => {
              console.log("Error", error);
          }
      );
  }

  editStudent(student:Student){
    this.studentService.student=student;
    this.router.navigate(['/student/edit/',student.sid]);
  }

}
