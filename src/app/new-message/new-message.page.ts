import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, Gesture, GestureController, Platform, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.page.html',
  styleUrls: ['./new-message.page.scss'],
})
export class NewMessagePage implements OnInit, AfterViewInit {
  private animation;
  private gesture?: Gesture;

  private started: boolean = false;
  private initialStep: number = 0;
  private MAX_TRANSLATE: number = 400;

  @ViewChild("swipeThumb") swipeThumb: ElementRef;

  constructor(
    private gestureCtrl: GestureController,
    private route: Router,
    private animationCtrl: AnimationController,
    private platform: Platform,
    private modalController: ModalController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.MAX_TRANSLATE = this.platform.width() * 0.6;
    this.animation = this.animationCtrl.create()
      .addElement(this.swipeThumb.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(0)', `translateX(${this.MAX_TRANSLATE}px)`);
    this.gesture = this.gestureCtrl.create({
      el: this.swipeThumb.nativeElement,
      threshold: 0,
      gestureName: 'swipeThumb-drag',
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev),

    })

    this.gesture.enable(true);
  }

  private onMove(ev) {
    if (!this.started) {
      this.animation.progressStart();
      this.started = true;
    }

    this.animation.progressStep(this.getStep(ev));
  }

  private onEnd(ev) {
    if (!this.started) { return; }

    this.gesture.enable(false);

    const step = this.getStep(ev);
    const shouldComplete = step > 0.5;

    this.animation
      .progressEnd((shouldComplete) ? 1 : 0, step)
      .onFinish(() => this.gesture.enable(true));

    this.initialStep = (shouldComplete) ? this.MAX_TRANSLATE : 0;
    this.started = false;
    this.modalController.dismiss();
  }
  private clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
  }

  private getStep(ev) {
    const delta = this.initialStep + ev.deltaX;
    return this.clamp(0, delta / this.MAX_TRANSLATE, 1);
  }


  dismiss() {
    this.modalController.dismiss();
  }


}
