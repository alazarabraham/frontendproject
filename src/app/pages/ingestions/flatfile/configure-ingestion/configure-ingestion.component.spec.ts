import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureIngestionComponent } from './configure-ingestion.component';

describe('ConfigureIngestionComponent', () => {
  let component: ConfigureIngestionComponent;
  let fixture: ComponentFixture<ConfigureIngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureIngestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
