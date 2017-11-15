import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsxtitlebarComponent } from './osxtitlebar.component';

describe('OsxtitlebarComponent', () => {
  let component: OsxtitlebarComponent;
  let fixture: ComponentFixture<OsxtitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsxtitlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsxtitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
