import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTresComponent } from './result-tres.component';

describe('ResultTresComponent', () => {
  let component: ResultTresComponent;
  let fixture: ComponentFixture<ResultTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultTresComponent]
    });
    fixture = TestBed.createComponent(ResultTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
