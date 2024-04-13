import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-guest-entry-send-notification',
  templateUrl: './guest-entry-send-notification.page.html',
  styleUrls: ['./guest-entry-send-notification.page.scss'],
})
export class GuestEntrySendNotificationPage implements OnInit {
  showSection = 1;
  BackButton: string = 'show';
  homeButton: string = 'hide';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showSectionButton(position) {
    this.showSection = position;
    if (this.showSection == 2) {
      this.BackButton = 'hide'; 
      this.homeButton = 'show'; 
      setTimeout(() => {
        this.showSectionButton(3);
      }, 3000);
    }
  }

  home() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
} 
