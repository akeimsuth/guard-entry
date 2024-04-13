import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  position: number;
  @ViewChild("first", { static: true }) first: ElementRef;
  @ViewChild("second", { static: true }) second: ElementRef;
  @ViewChild("third", { static: true }) third: ElementRef;
  @ViewChild("four", { static: true }) four: ElementRef;
  @ViewChild("five", { static: true }) five: ElementRef;
  @ViewChild("six", { static: true }) six: ElementRef;
  constructor( private navCtrl: NavController) {
   
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
        this.navCtrl.navigateRoot(['./tabs']);
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
  continue() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
}
