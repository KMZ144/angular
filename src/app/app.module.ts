import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: 'home', component: SliderComponent  },
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path: 'products', component: ProductsComponent },
  { path :'product/:id',component:ProductDetailsComponent },
  { path :'todo',component:TodoListComponent },
  { path : 'form',component:StudentsFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    TodoListComponent,
    StudentsFormComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
