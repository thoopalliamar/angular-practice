import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = ["prj1","prj2","prj3","prj4","prj5"];
  projectcreated =["description"];
  constructor() { }

  onClick(localprj){
     let index = this.projects.indexOf(localprj);
     this.projects.fill(this.projectcreated[0]);
  }

  onClickSave(localprj){
    this.projectcreated.fill(localprj);
  }
  ngOnInit() {
  }

}
