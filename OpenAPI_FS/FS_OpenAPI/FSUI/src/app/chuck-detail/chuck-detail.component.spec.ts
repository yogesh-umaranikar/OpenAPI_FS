import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckDetailComponent } from './chuck-detail.component';

describe('ChuckDetailComponent', () => {
  let component: ChuckDetailComponent;
  let fixture: ComponentFixture<ChuckDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
