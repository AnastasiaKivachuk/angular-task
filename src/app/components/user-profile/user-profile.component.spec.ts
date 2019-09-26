import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { AuthService } from "../../shared/services/auth.service";
import { OtherService } from "../../shared/services/other.service";
import { UserProfileComponent } from './user-profile.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let otherService: OtherService;
  let spy: jasmine.Spy;
  let de: DebugElement;
  let mockUser;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      providers: [OtherService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    otherService = fixture.debugElement.injector.get(OtherService);
    de=fixture.debugElement;
    fixture.detectChanges();
    // spy = spyOn(OtherService, 'GoToHome')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call OtherServise', () => {

    component.goHome()
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('User Profile');
  });
});
