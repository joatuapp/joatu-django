
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoatuDashboardComponent } from './joatu-dashboard.component';

describe('JoatuDashboardComponent', () => {
  let component: JoatuDashboardComponent;
  let fixture: ComponentFixture<JoatuDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JoatuDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoatuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
