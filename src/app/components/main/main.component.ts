import { Component } from '@angular/core';
import { projects } from '../../backendData';
import { Projects } from '../../models/projects';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  projectsData: Projects[] = projects;
}
