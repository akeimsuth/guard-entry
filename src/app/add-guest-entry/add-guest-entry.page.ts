import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-guest-entry',
  templateUrl: './add-guest-entry.page.html',
  styleUrls: ['./add-guest-entry.page.scss'],
})
export class AddGuestEntryPage implements OnInit { 
  building: string = "1"; 
  flat_number: string = "3"; 
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
}
