import { Component, OnInit, Input } from '@angular/core';
import { IProject } from "app/models/project.model";

@Component({
  selector: 'tl-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  private _project:IProject;
  constructor() { }

  @Input()
  get project() {
    return this._project;
  }

  set project(pr:IProject) {
    this._project = pr;
  }
  
  ngOnInit() {
  }

}
