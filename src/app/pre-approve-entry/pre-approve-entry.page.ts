import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pre-approve-entry',
  templateUrl: './pre-approve-entry.page.html',
  styleUrls: ['./pre-approve-entry.page.scss'],
})
export class PreApproveEntryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
}
