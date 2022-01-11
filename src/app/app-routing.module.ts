import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './Pages/course/course.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import { TrainerCourseMappingFormComponent } from './Pages/trainer-course-mapping-form/trainer-course-mapping-form.component';
import { TrainerCourseMappingComponent } from './Pages/trainer-course-mapping/trainer-course-mapping.component';
import { ChapterComponent } from './Pages/chapter/chapter.component'
import { TrainerFormComponent } from './Pages/trainer-form/trainer-form.component';
import { TrainerComponent } from './Pages/trainer/trainer.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import{ChapterDashboardComponent} from './chapter-dashboard/chapter-dashboard.component'
import { EmployeeComponent } from './Pages/employee/employee.component';
import { EmployeeFormComponent } from './Pages/employee-form/employee-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: 'Login', component: LoginComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Course', component: CourseComponent },
  { path: 'Chapter', component: ChapterComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'EmployeeForm', component: EmployeeFormComponent },
  { path: 'Trainer', component: TrainerComponent },
  { path: 'TrainerForm', component: TrainerFormComponent },
  { path: 'TrainerCourseMapping', component: TrainerCourseMappingComponent },
  { path: 'TrainerCourseMappingForm', component: TrainerCourseMappingFormComponent },
  {path:'CourseDashboard',component:CourseDashboardComponent},
  {path:'ChapterDashboard',component:ChapterDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
