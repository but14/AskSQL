import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputchatComponent } from './inputchat.component';

describe('InputchatComponent', () => {
  let component: InputchatComponent;
  let fixture: ComponentFixture<InputchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputchatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
