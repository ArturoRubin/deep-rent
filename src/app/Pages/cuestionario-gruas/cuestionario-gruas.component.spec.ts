import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioGruasComponent } from './cuestionario-gruas.component';

describe('CuestionarioGruasComponent', () => {
  let component: CuestionarioGruasComponent;
  let fixture: ComponentFixture<CuestionarioGruasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuestionarioGruasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuestionarioGruasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
