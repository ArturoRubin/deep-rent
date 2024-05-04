import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioAlmejasComponent } from './cuestionario-almejas.component';

describe('CuestionarioAlmejasComponent', () => {
  let component: CuestionarioAlmejasComponent;
  let fixture: ComponentFixture<CuestionarioAlmejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuestionarioAlmejasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuestionarioAlmejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
