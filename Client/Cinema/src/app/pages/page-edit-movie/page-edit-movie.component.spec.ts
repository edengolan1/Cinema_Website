import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditMovieComponent } from './page-edit-movie.component';

describe('PageEditMovieComponent', () => {
  let component: PageEditMovieComponent;
  let fixture: ComponentFixture<PageEditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEditMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
