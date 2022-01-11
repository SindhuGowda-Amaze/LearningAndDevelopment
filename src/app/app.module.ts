import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
// import { AdminLoginComponent } from './Pages/admin-login/admin-login.component';
// import { EmployeeLoginComponent } from './Pages/employee-login/employee-login.component';
// import { ManagerLoginComponent } from './Pages/manager-login/manager-login.component';
import { TrainerComponent } from './Pages/trainer/trainer.component';
import { TrainerFormComponent } from './Pages/trainer-form/trainer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    // AdminLoginComponent,
    // EmployeeLoginComponent,
    // ManagerLoginComponent
    TrainerComponent,
    TrainerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
