import { Component } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-employees-cell-custom',
  templateUrl: './employees-cell-custom.component.html',
  styleUrls: ['./employees-cell-custom.component.scss'],
})
export class EmployeesCellCustomComponent {
  rowId: number = 0;

  agInit(params: ICellRendererParams): void {
    this.rowId = params.data.id;
  }
}
