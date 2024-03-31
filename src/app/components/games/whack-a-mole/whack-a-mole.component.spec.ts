import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackAMoleComponent } from './whack-a-mole.component';

describe('WhackAMoleComponent', () => {
  let component: WhackAMoleComponent;
  let fixture: ComponentFixture<WhackAMoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhackAMoleComponent]
    });
    fixture = TestBed.createComponent(WhackAMoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
