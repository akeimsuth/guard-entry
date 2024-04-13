import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-deliveryman-entry',
  templateUrl: './add-deliveryman-entry.page.html',
  styleUrls: ['./add-deliveryman-entry.page.scss'],
})
export class AddDeliverymanEntryPage implements OnInit {
  building: string = "1"; 
  flat_number: string = "3"; 
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
}
