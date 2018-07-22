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
     this.studentService.findAll().subscribe(
       studentList=>{this.students=studentList;}, err=>{console.log(err)}
      );
   }

   deleteStudent(student:Student){
    this.studentService.deleteStudentById(student.sid).subscribe( successs=>{
            let index = this.students.indexOf(student, 0);
                if (index > -1)
                {
                    this.students.splice(index, 1);
                    this.getAllUsers();
                }
              },err=>{console.log(err)});
   }

  //  updateStudent(student:Student){
  //   this.studentService.updateStudent(student).subscribe( successs=>{},err=>{console.log(err)});
  //  }

   editStudent(student:Student){
      this.studentService.student=student;
      this.router.navigate(['/student/edit/',student.sid]);
   }

}
