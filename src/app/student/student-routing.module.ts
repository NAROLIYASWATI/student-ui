 import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
{path: 'student',component: StudentListComponent },
{path: 'student/create', component: StudentCreateComponent},
{path: 'student/edit/:sid',component: StudentCreateComponent},
{path: 'student/delete/:sid',component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }


