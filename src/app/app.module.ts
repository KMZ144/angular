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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    TodoListComponent,
    StudentsFormComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
