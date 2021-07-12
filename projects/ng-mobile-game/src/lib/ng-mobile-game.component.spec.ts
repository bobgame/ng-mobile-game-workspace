import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMobileGameComponent } from './ng-mobile-game.component';

describe('NgMobileGameComponent', () => {
  let component: NgMobileGameComponent;
  let fixture: ComponentFixture<NgMobileGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMobileGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMobileGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
