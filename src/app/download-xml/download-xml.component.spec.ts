import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadXmlComponent } from './download-xml.component';

describe('DownloadXmlComponent', () => {
  let component: DownloadXmlComponent;
  let fixture: ComponentFixture<DownloadXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadXmlComponent]
    });
    fixture = TestBed.createComponent(DownloadXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
