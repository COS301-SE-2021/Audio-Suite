import { TestBed } from '@angular/core/testing';

import { OfficeRoomService } from './office-room.service';

describe('OfficeRoomService', () => {
  let service: OfficeRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
