import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeHairComponent } from './type-hair.component';

describe('TypeHairComponent', () => {
  let component: TypeHairComponent;
  let fixture: ComponentFixture<TypeHairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeHairComponent]
    });
    fixture = TestBed.createComponent(TypeHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
