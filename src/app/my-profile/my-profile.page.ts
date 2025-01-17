import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot(['./sign-in']);
  }
}
