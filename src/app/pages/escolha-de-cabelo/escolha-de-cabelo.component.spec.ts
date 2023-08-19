import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaDeCabeloComponent } from './escolha-de-cabelo.component';

describe('EscolhaDeCabeloComponent', () => {
  let component: EscolhaDeCabeloComponent;
  let fixture: ComponentFixture<EscolhaDeCabeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolhaDeCabeloComponent]
    });
    fixture = TestBed.createComponent(EscolhaDeCabeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
