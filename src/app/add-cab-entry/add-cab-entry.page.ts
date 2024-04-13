import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-cab-entry',
  templateUrl: './add-cab-entry.page.html',
  styleUrls: ['./add-cab-entry.page.scss'],
})
export class AddCabEntryPage implements OnInit {
  building: string = "1"; 
  flat_number: string = "3"; 
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
}
