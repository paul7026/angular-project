import { Projects } from './models/projects';
import { Employees } from './models/employees';

export const projects: Projects[] = [
  {
    id: 1,
    name: 'SpaceX',
    numberOfEmploees: 3,
  },
  {
    id: 2,
    name: 'Gala',
    numberOfEmploees: 2,
  },
];

export const employees: Employees[] = [
  {
    id: 1,
    fullName: 'John Smith',
    position: 'Front-End Developer',
    city: 'New York',
    numberOfProjects: 2,
  },
  {
    id: 2,
    fullName: 'Sam Jackson',
    position: 'Back-End Developer',
    city: 'Washington',
    numberOfProjects: 1,
  },
  {
    id: 3,
    fullName: 'William Jonson',
    position: 'QA-engineer',
    city: 'New York',
    numberOfProjects: 3,
  },
  {
    id: 4,
    fullName: 'Michael Garcia',
    position: 'DevOps-engineer',
    city: 'Phoenix',
    numberOfProjects: 2,
  },
  {
    id: 5,
    fullName: 'Andre Miller',
    position: 'Front-End Developer',
    city: 'Boston',
    numberOfProjects: 3,
  },
  {
    id: 6,
    fullName: 'Maximilian Lopez',
    position: 'Back-End Developer',
    city: 'Los Angeles',
    numberOfProjects: 2,
  },
];
