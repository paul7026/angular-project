import { Component } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-community/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-cell-custom',
  templateUrl: './project-cell-custom.component.html',
  styleUrls: ['./project-cell-custom.component.scss'],
})
export class ProjectCellCustomComponent {
  rowId: number = 0;

  constructor(private router: Router) {}

  agInit(params: ICellRendererParams): void {
    this.rowId = params.data.id;
  }

  changePage() {
    this.router.navigateByUrl(`/projects/${this.rowId}`);
  }
}
