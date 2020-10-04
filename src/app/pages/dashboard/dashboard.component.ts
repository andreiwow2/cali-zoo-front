import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  searchForm = this.fb.group({
    searchResult: [''] 
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('sidebar-mini');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('sidebar-mini');
  }

}
