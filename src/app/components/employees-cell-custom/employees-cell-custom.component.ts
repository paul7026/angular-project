import { Component } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-community/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-cell-custom',
  templateUrl: './employees-cell-custom.component.html',
  styleUrls: ['./employees-cell-custom.component.scss'],
})
export class EmployeesCellCustomComponent {
  rowId?: number;

  constructor(private router: Router) {}

  agInit(params: ICellRendererParams): void {
    this.rowId = params.data.userId;
  }
}
