import { TestBed } from '@angular/core/testing';

import { TextChannelsService } from './text-channels.service';

describe('TextChannelsService', () => {
  let service: TextChannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextChannelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
