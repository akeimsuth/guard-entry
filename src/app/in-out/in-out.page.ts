import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.page.html',
  styleUrls: ['./in-out.page.scss'],
})
export class InOutPage implements OnInit {
  segment = 0;
  sliderOne: any;
  counter = 0; 
  viewType: string;  
  @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor() { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();   
  }
}
