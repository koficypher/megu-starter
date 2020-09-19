import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'Account',
      url: '/menu/account'
    },
    {
      title: 'Support',
      url: '/menu/support'
    }
  ];

  selected = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((e): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        this.selected = e.url;
       // console.log(this.selected);
      });
   }

  ngOnInit() {
  }

}
