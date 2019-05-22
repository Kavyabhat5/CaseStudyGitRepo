import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CategoryService } from './category.service';
import { CategoryComponent } from './category/category.component';
import { EditComponent } from './edit/edit.component';
import { componentFactoryName } from '@angular/compiler';
import { AddComponent } from './add/add.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component'
//import { AddWorkOutComponent } from './add-work-out.com'


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CategoryComponent,
    AddComponent,
    EditComponent,
   // AddWorkCountComponent
    AddWorkoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'list-Category', component: CategoryComponent },
      { path: 'addcategory', component: AddComponent },
      { path: 'editcategory', component: EditComponent },
      // { path: 'addWorkout', component: AddWorkOutComponent }
      { path: 'add-workout', component: AddWorkoutComponent },
    ])
  ],
  providers: [CategoryService],
  bootstrap: [CategoryComponent]
})
export class AppModule { }
