import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcMacBookAirGraphicComponent } from './pc-mac-book-air-graphic.component';

describe('PcMacBookAirGraphicComponent', () => {
  let component: PcMacBookAirGraphicComponent;
  let fixture: ComponentFixture<PcMacBookAirGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcMacBookAirGraphicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcMacBookAirGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
