import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nameToolBar = '';

  isPhone: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(
    map(x => x.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver, private session: SessionService, private router: Router) {
  }

  ngOnInit() {
  }

  closeSession() {
    this.session.logged = false;
    this.router.navigate(['']);
  }

}
