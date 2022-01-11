import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './Pages/course/course.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import {ChapterComponent} from './Pages/chapter/chapter.component'

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: 'Login', component: LoginComponent },
 
  { path: 'Footer', component: FooterComponent },
  {path:'Course',component:CourseComponent},
  {path:'Chapter',component:ChapterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
