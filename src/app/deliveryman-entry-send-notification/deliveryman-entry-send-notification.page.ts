import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deliveryman-entry-send-notification',
  templateUrl: './deliveryman-entry-send-notification.page.html',
  styleUrls: ['./deliveryman-entry-send-notification.page.scss'],
})
export class DeliverymanEntrySendNotificationPage implements OnInit {
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
        this.showSectionButton(4);
      }, 3000);
    }
  }

  home() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
}
