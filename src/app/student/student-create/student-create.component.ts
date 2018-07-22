import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  addStudentForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.addStudentForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          sid: ['', [Validators.required, Validators.minLength(2)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addStudentForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addStudentForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addStudentForm.value))
  }


  // addStudentForm: FormGroup;
  
  // submitted: boolean=false;

  // private alertMessage="This is required";

  // // private _student: Student;

  // constructor(private studentService: StudentService,private formBuilder:FormBuilder) { 
  // }

  //  ngOnInit() {
  // //    this._student=this.studentService.student;

  //   this.addStudentForm = this.formBuilder.group({
  //     sid: ['', [Validators.required]],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  // });

  //  }

 


  // addStudent(){
  //   this.submitted =true;
  //   // stop here if form is invalid
  //   if (this.addStudentForm.invalid) {
  //     return;
  //   }

  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addStudentForm.value))

    
  //   //this.sid=this._student.sid;
  //   //this.fname=this._student.fname;
  //   //this.lname=this._student.lname;

  //  // this.studentService.student=this._student;
  //   //this.studentService.addStudent();
  // }

  // // updateStudent(){
  // //   this.studentService.student=this._student;
  // //   this.studentService.updateStudent();
  // // }

}
