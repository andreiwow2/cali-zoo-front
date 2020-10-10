import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '@app/services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
//import { User } from '@app/helpers';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  styleUrls: [ './dashboard.component.css' ],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  public readonly userName: string | null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {
    this.searchForm = this.fb.group({
     searchResult: [''],
   });
   
    if (!localStorage.getItem('userName')) 
      this.userName = 'unknown';
    else
      this.userName = localStorage.getItem('userName');
  }

  public logOutUser(): void {
    this.loginService.logOutUser()
    .pipe(map((ret: boolean): void => { 
      if (ret) {
        this.router.navigateByUrl('/login').catch((err: any): void => {
          console.error('DashboardPageComponent#UserLogOut#navigateByUrl', err);
        }); 
      } else {
        console.error('DashboardPageComponent#UserLogOut#next', 'Something went wrong on the server');
      }
    }))
    .subscribe({
      error(err: any): void { console.error('DashboardPageComponent#UserLogOut', err); },
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
