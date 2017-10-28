import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// create task component
import { CreateTaskComponent } from './createTask/createTask.component';
import { ViewTaskComponent } from './viewTask/viewTask.component';
import { TaskService } from './task/task.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'createtask', component: CreateTaskComponent },
      { path: 'viewtask', component: ViewTaskComponent },
      { path: 'edit/id/:taskId', component: CreateTaskComponent },
      { path: '', redirectTo: 'viewTask', pathMatch: 'full' }
    ])
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
