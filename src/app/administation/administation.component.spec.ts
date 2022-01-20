import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministationComponent } from './administation.component';

describe('AdministationComponent', () => {
  let component: AdministationComponent;
  let fixture: ComponentFixture<AdministationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
