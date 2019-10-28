import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public projects = [];

  onSelectProject() { }

  constructor(public projectList: ApiService) { }

  ngOnInit() {
    this.projectList.getProjects().subscribe(data => { this.projects = data; });
  }

}
