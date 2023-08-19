import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDoisComponent } from './result-dois.component';

describe('ResultDoisComponent', () => {
  let component: ResultDoisComponent;
  let fixture: ComponentFixture<ResultDoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultDoisComponent]
    });
    fixture = TestBed.createComponent(ResultDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
