import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskService } from '../task/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create-task',
    templateUrl: './createTask.component.html',
    styleUrls: ['./createTask.css']
})

export class CreateTaskComponent implements OnInit {
    // this will hold the task task message data
    task: Task = {
        taskMessage: null,
    };
    editMode: boolean;
    taskIdToEdit: string;

    constructor(private taskService: TaskService, private router: Router, private acitvatedRoute: ActivatedRoute) { }



    ngOnInit() {
        // checking if there is id param in the activated route
        this.acitvatedRoute.params.subscribe(params => {
            if (params.taskId) {
                this.editMode = true;
                this.taskIdToEdit = params.taskId;
                this.taskService.getTaskById(params.taskId)
                    .then(data => {
                        const taskData = data.data;
                        this.task = taskData[0];
                    }).catch(err => {

                    });
            } else {
                this.editMode = false;
            }
        });
    }

    // defining functions
    createTask(task: Task) {
        this.taskService.createTask(task)
            .then(data => {
                this.router.navigateByUrl('/viewtask');
            }).catch(err => {
                console.log(err);
            });
    }
    updateTask(task: Task) {
        this.taskService.updateTaskById(this.taskIdToEdit, task)
            .then(data => {
                this.router.navigateByUrl('/viewtask');
            }).catch(err => {
                console.log(err);
            });
    }
}
