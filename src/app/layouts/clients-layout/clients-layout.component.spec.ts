import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLayoutComponent } from './clients-layout.component';

describe('ClientsLayoutComponent', () => {
  let component: ClientsLayoutComponent;
  let fixture: ComponentFixture<ClientsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
