import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-project-cell-custom',
  templateUrl: './project-cell-custom.component.html',
  styleUrls: ['./project-cell-custom.component.scss'],
})
export class ProjectCellCustomComponent implements OnInit {
  rowId: number = 0;
  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.rowId = params.data.id;
  }

  ngOnInit(): void {}
}
