import { TestBed } from '@angular/core/testing';

import { TopicService } from './topic.service';

describe('TopicService', () => {
  let service: TopicService;
  let spyHttpClient = jasmine.createSpyObj("HttpClient",["post"]);

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      { provide: TopicService, useValue: spyHttpClient }
    ]});
    service = TestBed.inject(TopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
