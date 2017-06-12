/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Ultima2Component } from './ultima2.component';

describe('Ultima2Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Ultima2Component
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Ultima2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(Ultima2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Ultima2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
