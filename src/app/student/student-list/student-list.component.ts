import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  private students: Student[];

  constructor(private studentService:StudentService) { }

   ngOnInit() {
     this.getAllUsers();
   }

   getAllUsers(){
     this.studentService.findAll().subscribe(
       students=>{this.students=students;}, err=>{console.log(err)})
   }

}
