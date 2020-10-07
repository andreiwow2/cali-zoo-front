import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { LoginService } from '@app/services';

interface FormData {
  email: string;
  password: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-adminlogin-page',
  styleUrls: [ './adminlogin-page.component.css' ],
  templateUrl: './adminlogin-page.component.html',
})
export class AdminloginPageComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;

  private readonly doLogin: Subject<FormData>;
  private readonly unsubscribe: Subject<void>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
  ) {
    this.loginForm = this.fb.group({
      email: [ '', [ Validators.email, Validators.required ] ],
      password: [ '', Validators.required ],
    });

    this.unsubscribe = new Subject<void>();
    this.doLogin = new Subject<FormData>();

    this.doLogin.pipe(
      switchMap(({ email, password }: FormData): Observable<boolean> => this.loginService.logInUser(email, password)),
      takeUntil(this.unsubscribe),
    ).subscribe({
      error(err: any): void { console.error('AdminloginPageComponent#doLogin', err); },
    });
  }

  public ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }

  public onSubmit(): void {
    const { email, password }: FormData = this.loginForm.value;
    this.doLogin.next({ email, password });
  }
}
