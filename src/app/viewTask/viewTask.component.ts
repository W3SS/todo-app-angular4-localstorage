import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-task',
    templateUrl: 'viewTask.component.html',
    styleUrls: ['./viewTask.css']
})

export class ViewTaskComponent implements OnInit {
    allTask: Task[];
    constructor(private taskService: TaskService, private router: Router) { }
    ngOnInit() {
        this.getAllTask();
    }

    getAllTask() {
        this.taskService.getAllTask()
            .then(data => {
                this.allTask = data.data;
            }).catch(err => {

            });
    }
    editTask(taskId: string) {
        this.router.navigateByUrl('/edit/id/' + taskId);
    }
    deleteTask(taskId: string) {
        this.taskService.deleteTaskById(taskId)
            .then(data => {
                this.getAllTask();
            }).catch(err => {
                console.log(err);
            });
    }
}
