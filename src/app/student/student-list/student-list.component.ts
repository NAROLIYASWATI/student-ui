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
  private student: Student;

  constructor(private studentService:StudentService, private router:Router) { }

   ngOnInit() {
     this.getAllUsers();
     this.students=this.studentService.students;
   }

   getAllUsers(){
     this.studentService.findAll();
   }

   deleteStudent(student:Student){
    this.studentService.student=student;
    this.studentService.deleteStudentById();
    this.students=this.studentService.students;
   }

  editStudent(student:Student){
    this.studentService.student=student;
    this.router.navigate(['/student/edit/',student.sid]);
  }

}
