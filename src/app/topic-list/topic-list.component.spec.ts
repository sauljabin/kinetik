import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListComponent } from './topic-list.component';
import { TopicService } from './topic.service';
import { subscribeOn } from 'rxjs';
import { AppModule } from '../app.module';

describe('TopicListComponent', () => {
  let component: TopicListComponent;
  let fixture: ComponentFixture<TopicListComponent>;
  let spyTopicService = jasmine.createSpyObj("TopicService",["getTopics"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicListComponent],
      imports: [AppModule],
      providers: [
        { provide: TopicService, useValue: spyTopicService }
      ]
    }).compileComponents();
    
    spyTopicService.getTopics.and.returnValue({ subscribe: (value: any) => void {} });

    fixture = TestBed.createComponent(TopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
