import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
