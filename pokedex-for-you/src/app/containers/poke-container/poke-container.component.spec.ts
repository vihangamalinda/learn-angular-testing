import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeContainerComponent } from './poke-container.component';

describe('PokeContainerComponent', () => {
  let component: PokeContainerComponent;
  let fixture: ComponentFixture<PokeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
