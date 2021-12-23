import { Component } from '@angular/core';
import { projects } from '../../backendData';
import { Project } from '../../models/project';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  projectsData: Project[] = projects;
}
