import { Injectable } from '@angular/core';
import { Task } from './task';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class TaskService {
    constructor(private http: Http) {

    }
    createTask(task: Task): Promise<any> {
        return this.http.post('http://selftuts.com:5000/api/v1.0/task', {
            taskMessage: task.taskMessage,
            createdAt: new Date(),
            updatedAt: new Date()
        }).toPromise()
            .then(response => {
                console.log(response.json());
            })
            .catch(err => {
                console.log(err);
            });

    }
    updateTaskById(taskId: string, task: Task): Promise<any> {
        return this.http.put('http://selftuts.com:5000/api/v1.0/task/id/' + taskId, {
            taskMessage: task.taskMessage,
            updatedAt: new Date()
        }).toPromise()
            .then(response => {
                console.log(response.json());
            })
            .catch(err => {
                console.log(err);
            });

    }
    getAllTask(): Promise<any> {
        return this.http.get('http://selftuts.com:5000/api/v1.0/task').toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });

    }
    getTaskById(taskId: string): Promise<any> {
        return this.http.get('http://selftuts.com:5000/api/v1.0/task/id/' + taskId).toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });

    }
    deleteTaskById(taskId: string): Promise<any> {
        return this.http.delete('http://selftuts.com:5000/api/v1.0/task/id/' + taskId).toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });

    }
}
