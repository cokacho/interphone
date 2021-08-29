import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TopicsService} from "../../../../core/services/topics.service";
import {Answer, TopicCard} from "../../../../core/models/common.model";

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  public topicId = -1;
  public cards!: TopicCard[];
  constructor(
    private service: TopicsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topicId = Number(params.get('topic_id'));
      this.getItem(this.topicId);
    });
  }

  public getItem(topicId: number) {
    this.service.getByRoot(topicId).subscribe(
      (cards) => {
        console.log(cards)
        this.cards = cards;
      }
    )
  }

  public getDetail(card: TopicCard) {
    this.router.navigate([`section/${card.id}`], {relativeTo: this.route});
    //display error
  }
}
