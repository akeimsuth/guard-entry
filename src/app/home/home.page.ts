import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit { 
  position: number;
  @ViewChild("first", { static: true }) first: ElementRef;
  @ViewChild("second", { static: true }) second: ElementRef;
  @ViewChild("third", { static: true }) third: ElementRef;
  @ViewChild("four", { static: true }) four: ElementRef;
  @ViewChild("five", { static: true }) five: ElementRef;
  @ViewChild("six", { static: true }) six: ElementRef;
  constructor(private route: Router, private modalController: ModalController, private toastController: ToastController) {
   
  }

  ngOnInit() {
    this.position = 1;
  }

  enter(n: number) {
    if (this.position < 7) {
      if (this.position === 1) {
        this.first.nativeElement.value = n;
      }
      if (this.position === 2) {
        this.second.nativeElement.value = n; 
      }
      if (this.position === 3) {
        this.third.nativeElement.value = n;
      }
      if (this.position === 4) {
        this.four.nativeElement.value = n;
      }
      if (this.position === 5) {
        this.five.nativeElement.value = n;
      }
      if (this.position === 6) {
        this.six.nativeElement.value = n;
        //this.route.navigate(['./pre-approve-entry']);
        this.checkPin();
      }
 
      this.position++;
      console.log(
          "position is " +
          this.position +
           " " +
         "PIN is " +
        this.first.nativeElement.value +
          this.second.nativeElement.value +
          this.third.nativeElement.value +
          this.four.nativeElement.value +
          this.five.nativeElement.value +
          this.six.nativeElement.value
      );
    }
  }
  checkPin() {
    if(        this.first.nativeElement.value +
      this.second.nativeElement.value +
      this.third.nativeElement.value +
      this.four.nativeElement.value +
      this.five.nativeElement.value +
      this.six.nativeElement.value === '000000'){
        this.route.navigate(['./pre-approve-entry']);
        this.reset();
      } else {
        this.presentToast();
      }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pin Does not match records',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
  reset() {
    this.position--;
    this.first.nativeElement.value = '';
    this.position--;
    this.second.nativeElement.value = '';
    this.position--;
    this.third.nativeElement.value = '';
    this.position--;
    this.four.nativeElement.value = '';
    this.position--;
    this.five.nativeElement.value = '';
    this.position--;
    this.six.nativeElement.value = '';
  }
  back() {
    if (this.position > 1) {
      this.position--;
      if (this.position === 1) {
        this.first.nativeElement.value = "";
      }
      if (this.position === 2) {
        this.second.nativeElement.value = "";
      }
      if (this.position === 3) {
        this.third.nativeElement.value = "";
      }
      if (this.position === 4) {
        this.four.nativeElement.value = "";
      }
      if (this.position === 5) {
        this.five.nativeElement.value = "";
      }
      if (this.position === 6) {
        this.six.nativeElement.value = "";
      }
      console.log(
         "position is " + 
          this.position +
          " " +
          "PIN is " +
        this.first.nativeElement.value +
          this.second.nativeElement.value +
          this.third.nativeElement.value +
          this.four.nativeElement.value +
          this.five.nativeElement.value +
          this.six.nativeElement.value
      );
    }
  }

 

  addGuestEntry() {
    this.route.navigate(['./add-guest-entry']);
  }
  addDeliverymanEntry() {
    this.route.navigate(['./add-deliveryman-entry']);
  }
  addServicemanEntry() {
    this.route.navigate(['./add-serviceman-entry']);
  }
  addCabEntry() {
    this.route.navigate(['./add-cab-entry']);
  }
 

  
}
