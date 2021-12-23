import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects/:id', component: ProjectPageComponent },
  { path: 'employees/:id', component: EmployeePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
