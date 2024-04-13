import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverymanEntrySendNotificationPage } from './deliveryman-entry-send-notification.page';

describe('DeliverymanEntrySendNotificationPage', () => {
  let component: DeliverymanEntrySendNotificationPage;
  let fixture: ComponentFixture<DeliverymanEntrySendNotificationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanEntrySendNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverymanEntrySendNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
