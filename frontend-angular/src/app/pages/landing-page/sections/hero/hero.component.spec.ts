import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { provideRouter } from '@angular/router';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the hero component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the B2B enterprise headline', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Construímos Motores de IA e Plataformas SaaS');
  });

  it('should render engineering authority metrics', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('SSOT & Zero-Spaghetti');
    expect(compiled.textContent).toContain('Cobertura TDD ≥ 93%');
    expect(compiled.textContent).toContain('Multi-Tenant LGPD');
  });

  it('should emit toggleLoginForm when login shortcut is clicked', () => {
    spyOn(component.toggleLoginForm, 'emit');
    const loginButton = fixture.nativeElement.querySelector('button:last-child');
    loginButton.click();
    expect(component.toggleLoginForm.emit).toHaveBeenCalled();
  });
});
