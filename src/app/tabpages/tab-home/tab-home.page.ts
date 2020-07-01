import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  constructor() { }

  segnav = 'instocks';

  slideOption = {
    initialSlide: 0,
    slidePerView: 1,
    autoplay: true
  }

  ngOnInit() {
  }

}
