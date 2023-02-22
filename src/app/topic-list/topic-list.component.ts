import { Component, OnInit } from '@angular/core';
import { Topic } from './topic';
import { TopicService } from './topic.service';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  dataSource: Topic[] = [];

  displayedColumns: string[] = ['name'];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(data => {
      this.dataSource = data[0].topics.map((raw: { name: string; }) => new Topic(raw.name))
    })
  }
}
