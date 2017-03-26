import { Injectable, EventEmitter } from '@angular/core';
import { IProject } from '../models/project.model';
import { Http, URLSearchParams } from "@angular/http";

@Injectable()
export class Service {

  private _tasks: IProject[];
  public onTasksChanged = new EventEmitter<IProject[]>();

  constructor(private http: Http) {
    this.init();
  }

  private async init() {

    const promise = this.http.get('http://tas.ddnsfree.com:40010/odata/Projects');
    const res = await promise;
  }

  public get tasks() {
    return this._tasks;
  }
  public set tasks(value) {
    this._tasks = value;
    this.onTasksChanged.emit(this._tasks);
  }

  public addTask(task: IProject) {
    this._tasks.push(task);
  }
}
