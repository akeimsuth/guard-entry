import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicemanEntrySendNotificationPage } from './serviceman-entry-send-notification.page';

describe('ServicemanEntrySendNotificationPage', () => {
  let component: ServicemanEntrySendNotificationPage;
  let fixture: ComponentFixture<ServicemanEntrySendNotificationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicemanEntrySendNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicemanEntrySendNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
