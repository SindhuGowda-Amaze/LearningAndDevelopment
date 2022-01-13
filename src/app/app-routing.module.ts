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
import { CourseDashboardComponent } from './Pages/course-dashboard/course-dashboard.component';
import { ChapterDashboardComponent } from './Pages/chapter-dashboard/chapter-dashboard.component'
import { EmployeeComponent } from './Pages/employee/employee.component';
import { EmployeeFormComponent } from './Pages/employee-form/employee-form.component';
import { MyCourseDashboardComponent } from './Pages/my-course-dashboard/my-course-dashboard.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { ViewCourseComponent } from './Pages/view-course/view-course.component';

import { TakeAssessmentComponent } from './Pages/take-assessment/take-assessment.component';
import { AssessmentResultComponent } from './Pages/assessment-result/assessment-result.component';
import { CourseCertificateComponent } from './Pages/course-certificate/course-certificate.component';
import { StartMyCourseComponent } from './Pages/start-my-course/start-my-course.component';
import { LearningPathDashboardComponent } from './Pages/learning-path-dashboard/learning-path-dashboard.component';
import { LearningPathDetailsComponent } from './Pages/learning-path-details/learning-path-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: 'Login', component: LoginComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Course', component: CourseComponent },
  { path: 'Chapter', component: ChapterComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'EmployeeForm', component: EmployeeFormComponent },
  { path: 'Catalog', component: CatalogComponent },
  { path: 'Trainer', component: TrainerComponent },
  { path: 'TrainerForm', component: TrainerFormComponent },
  { path: 'TrainerCourseMapping', component: TrainerCourseMappingComponent },
  { path: 'TrainerCourseMappingForm', component: TrainerCourseMappingFormComponent },
  { path: 'CourseDashboard', component: CourseDashboardComponent },
  { path: 'ChapterDashboard', component: ChapterDashboardComponent },
  { path: 'AdminDashboard', component: AdminDashboardComponent },
  { path: 'ViewCourse', component: ViewCourseComponent },
  { path: 'MyCourseDashboard', component: MyCourseDashboardComponent },
  { path: 'TakeAssessment', component: TakeAssessmentComponent },
  { path: 'AssessmentResult', component: AssessmentResultComponent },
  { path: 'CourseCertificate', component: CourseCertificateComponent },
  { path: 'StartMyCourse', component: StartMyCourseComponent },
  { path: 'LearningPathDashboard', component: LearningPathDashboardComponent },
  { path: 'LearningPathDetails', component: LearningPathDetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
