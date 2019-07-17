import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPerfilPage } from './novo-perfil.page';

describe('NovoPerfilPage', () => {
  let component: NovoPerfilPage;
  let fixture: ComponentFixture<NovoPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
