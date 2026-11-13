import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcosystemBentoComponent } from './ecosystem-bento.component';
import { provideRouter } from '@angular/router';

describe('EcosystemBentoComponent', () => {
  let component: EcosystemBentoComponent;
  let fixture: ComponentFixture<EcosystemBentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemBentoComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EcosystemBentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ecosystem bento component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 4 core products in the bento grid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('SmartContact');
    expect(compiled.textContent).toContain('MAS (Motor de Aprendizagem Smart)');
    expect(compiled.textContent).toContain('Lisa — Automação Social');
    expect(compiled.textContent).toContain('SPED Fácil');
  });

  it('should have 4 products in the signal', () => {
    expect(component.products().length).toBe(4);
  });
});
