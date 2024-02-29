import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteMovieComponent } from './page-delete-movie.component';

describe('PageDeleteMovieComponent', () => {
  let component: PageDeleteMovieComponent;
  let fixture: ComponentFixture<PageDeleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDeleteMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
