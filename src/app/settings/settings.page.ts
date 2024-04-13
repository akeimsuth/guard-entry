import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Constants } from 'src/models/contants.models';
import { Helper } from 'src/models/helper.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkModeStatus: string;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private myEvent: MyEvent, private route: Router, private navCtrl: NavController, private modalController: ModalController) {
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
  }

  ngOnInit() {
    this.darkModeStatus = (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK).toString();
  }
  recentMessages() {
    this.route.navigate(['./recent-messages']);
  }
  getSupport() {
    this.route.navigate(['./get-support']);
  }
  termsConditions() {
    this.route.navigate(['./terms-conditions']);
  }
  changeLanguage() {
    this.route.navigate(['./change-language']);
  }
  signIn() {
    this.navCtrl.navigateRoot(['./login']);
  }
  onDarkMode(event) {
    let isDarkTheme = event.target.value == "true" ? true : false;
    document.body.setAttribute('class', isDarkTheme ? 'dark-theme' : 'light-theme');
    Helper.seThemeMode(isDarkTheme ? Constants.THEME_MODE_DARK : Constants.THEME_MODE_LIGHT);
  }

  developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }
}
