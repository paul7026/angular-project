import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'employees/1', component: EmployeeCardComponent },
  { path: 'projects/1', component: ProjectCardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
