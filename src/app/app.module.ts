import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { MainComponent } from './components/main/main.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProjectCellCustomComponent } from './components/project-cell-custom/project-cell-custom.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesCellCustomComponent } from './components/employees-cell-custom/employees-cell-custom.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ProjectsTableComponent,
    MainComponent,
    ProjectCellCustomComponent,
    PageNotFoundComponent,
    EmployeesTableComponent,
    EmployeesCellCustomComponent,
    ProjectCardComponent,
    EmployeeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
