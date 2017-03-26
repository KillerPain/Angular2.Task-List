import { Component, OnInit } from '@angular/core';
import { IProject } from "app/models/project.model";
import { Service } from "app/services/service";

@Component({
  selector: 'tl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public projects: IProject[];
  
  constructor(private projectService: Service) {    
  }

  ngOnInit() {    
  }

}
