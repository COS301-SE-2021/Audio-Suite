import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { TimeTrackingService } from './time-tracking.service';

describe('TimeTrackingService', () => {
  let httpClient: HttpClient;
  let httpTestCtrl: HttpTestingController;
  let timeTrackingService: TimeTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  beforeEach(inject(
    [TimeTrackingService], (service: TimeTrackingService) => {
      timeTrackingService = service;
    }
  ));

  it('should be created', () => {
    expect(timeTrackingService).toBeTruthy();
  });
});
