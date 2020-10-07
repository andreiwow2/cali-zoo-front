import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  styleUrls: [ './dashboard.component.css' ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.searchForm = this.fb.group({
     searchResult: [''],
   });
  }

  public ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('sidebar-mini');
  }

  public ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('sidebar-mini');
  }
}
