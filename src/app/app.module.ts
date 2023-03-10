import { ProductModule } from './product.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: 'home', component: SliderComponent  },
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path :'todo',component:TodoListComponent },
  { path : 'form',component:StudentsFormComponent },
  { path: 'login',component:LoginComponent},
  { path: 'logout',redirectTo:'home',pathMatch:'full'},
  { path: '**',component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    TodoListComponent,
    StudentsFormComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
