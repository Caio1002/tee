import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}
