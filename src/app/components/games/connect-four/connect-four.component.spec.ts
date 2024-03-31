import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFourComponent } from './connect-four.component';

describe('ConnectFourComponent', () => {
  let component: ConnectFourComponent;
  let fixture: ComponentFixture<ConnectFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectFourComponent]
    });
    fixture = TestBed.createComponent(ConnectFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
