import { Project } from './models/project';
import { Employee } from './models/employee';

export const projects: Project[] = [
  {
    id: 1,
    name: 'SpaceX',
    numberOfEmploees: 3,
    description: 'Some description about spaceX',
  },
  {
    id: 2,
    name: 'Gala',
    numberOfEmploees: 3,
    description: 'Some description about Gala',
  },
];

export const employees: Employee[] = [
  {
    id: 1,
    fullName: 'John Smith',
    position: 'Front-End Developer',
    city: 'New York',
    numberOfProjects: 2,
    projectId: 1,
  },
  {
    id: 2,
    fullName: 'Sam Jackson',
    position: 'Back-End Developer',
    city: 'Washington',
    numberOfProjects: 1,
    projectId: 1,
  },
  {
    id: 3,
    fullName: 'William Jonson',
    position: 'QA-engineer',
    city: 'New York',
    numberOfProjects: 3,
    projectId: 1,
  },
  {
    id: 4,
    fullName: 'Michael Garcia',
    position: 'DevOps-engineer',
    city: 'Phoenix',
    numberOfProjects: 2,
    projectId: 2,
  },
  {
    id: 5,
    fullName: 'Andre Miller',
    position: 'Front-End Developer',
    city: 'Boston',
    numberOfProjects: 3,
    projectId: 2,
  },
  {
    id: 6,
    fullName: 'Maximilian Lopez',
    position: 'Back-End Developer',
    city: 'Los Angeles',
    numberOfProjects: 2,
    projectId: 2,
  },
];
