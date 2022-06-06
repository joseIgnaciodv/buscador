import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpassComponent } from './perfilpass.component';

describe('PerfilpassComponent', () => {
  let component: PerfilpassComponent;
  let fixture: ComponentFixture<PerfilpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
