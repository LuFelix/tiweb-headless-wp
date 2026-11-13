import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringTrustComponent } from './engineering-trust.component';
import { provideRouter } from '@angular/router';

describe('EngineeringTrustComponent', () => {
  let component: EngineeringTrustComponent;
  let fixture: ComponentFixture<EngineeringTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringTrustComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the engineering trust component', () => {
    expect(component).toBeTruthy();
  });

  it('should default to business mode and toggle to tech mode', () => {
    expect(component.activeMode()).toBe('business');
    component.setMode('tech');
    expect(component.activeMode()).toBe('tech');
  });

  it('should contain 4 pipeline stages', () => {
    expect(component.stages.length).toBe(4);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Arquitetura SSOT');
    expect(compiled.textContent).toContain('Desenvolvimento Guiado por Testes (TDD)');
    expect(compiled.textContent).toContain('Quality Gate');
    expect(compiled.textContent).toContain('Produção Híbrida');
  });
});
