import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../Student';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

    private student: Student;
    private addStudentForm: FormGroup;
    private submitted = false;

    constructor(private formBuilder: FormBuilder,private studentService: StudentService, private router:Router) { }

    ngOnInit() {
        this.student=this.studentService.student;
        this.addStudentForm = this.formBuilder.group({
            sid: ['', [Validators.required, Validators.minLength(2)]],
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.addStudentForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.addStudentForm.invalid) {
            return;
        }
        this.studentService.student=this.addStudentForm.value;
        this.studentService.addStudent().subscribe(
                data => {
                    console.log("POST Request is successful ", data);
                    
                },
                error => {
                    console.log("Error", error);
                }
            );
        this.studentService.findAll();
        this.router.navigate(['/student']);
    }
}
