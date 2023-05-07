import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPontuacaoComponent } from './registrar-pontuacao.component';

describe('RegistrarPontuacaoComponent', () => {
  let component: RegistrarPontuacaoComponent;
  let fixture: ComponentFixture<RegistrarPontuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPontuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
