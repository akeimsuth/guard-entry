import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestEntrySendNotificationPage } from './guest-entry-send-notification.page';

describe('GuestEntrySendNotificationPage', () => {
  let component: GuestEntrySendNotificationPage;
  let fixture: ComponentFixture<GuestEntrySendNotificationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestEntrySendNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestEntrySendNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
