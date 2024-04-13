import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-serviceman-entry',
  templateUrl: './add-serviceman-entry.page.html',
  styleUrls: ['./add-serviceman-entry.page.scss'],
})
export class AddServicemanEntryPage implements OnInit {
  building: string = "1";
  flat_number: string = "3";
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
}
