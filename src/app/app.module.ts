import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { TrainerComponent } from './Pages/trainer/trainer.component';
import { TrainerFormComponent } from './Pages/trainer-form/trainer-form.component';
import { TrainerCourseMappingComponent } from './Pages/trainer-course-mapping/trainer-course-mapping.component';
import { CourseDashboardComponent } from './Pages/course-dashboard/course-dashboard.component';
import { ChapterDashboardComponent } from './Pages/chapter-dashboard/chapter-dashboard.component';
import { CourseComponent } from './Pages/course/course.component';
import { ChapterComponent } from './Pages/chapter/chapter.component';
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

// import { NgxFullCalendarModule } from 'ngx-fullcalendar';
// import { NgWizardModule } from 'ng-wizard';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
// import { NgxFullCalendarModule } from '../../node_modules/ngx-fullcalendar';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssessmentdashboardComponent } from './Pages/assessmentdashboard/assessmentdashboard.component';
import { AssessmentFormComponent } from './Pages/assessment-form/assessment-form.component';
import { ManagerDashboardComponent } from './Pages/manager-dashboard/manager-dashboard.component';



const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TrainerComponent,
    TrainerFormComponent,
    TrainerCourseMappingComponent,
    CourseDashboardComponent,
    ChapterDashboardComponent,
    CourseComponent,
    ChapterComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    MyCourseDashboardComponent,
    CatalogComponent,
    AdminDashboardComponent,
    ViewCourseComponent,
    StartMyCourseComponent,
    TakeAssessmentComponent,
    AssessmentResultComponent,
    CourseCertificateComponent,
    LearningPathDashboardComponent,
    LearningPathDetailsComponent,
    AssessmentdashboardComponent,
    AssessmentFormComponent,
    ManagerDashboardComponent,
  
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    // NgxFullCalendarModule,
    HttpClientModule,
    FormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    NgxPaginationModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
