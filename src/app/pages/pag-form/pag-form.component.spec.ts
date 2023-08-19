import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFormComponent } from './pag-form.component';

describe('PagFormComponent', () => {
  let component: PagFormComponent;
  let fixture: ComponentFixture<PagFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagFormComponent]
    });
    fixture = TestBed.createComponent(PagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
