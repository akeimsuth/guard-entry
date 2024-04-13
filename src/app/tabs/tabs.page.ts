import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NewMessagePage } from '../new-message/new-message.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  toggleClass = false;
  constructor(private modalController: ModalController, private toastController: ToastController, private route: Router) { }

  ngOnInit() {
    // setTimeout(() => this.newMessaage(), 3000);
  }

  // newMessaage() {
  //   this.modalController.create({ component: NewMessagePage }).then((modalElement) => modalElement.present());
  // }

  myProfile() {
    this.route.navigate(['./my-profile']);
  }

  changeLanguage() {
    this.route.navigate(['./change-language']);
  }
  showOptions() {
    this.toggleClass = !this.toggleClass;
  }
}
