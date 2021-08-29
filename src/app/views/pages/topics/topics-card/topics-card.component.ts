import { Component, OnInit } from '@angular/core';
import {Answer, TopicCard} from "../../../../core/models/common.model";
import {TopicsService} from "../../../../core/services/topics.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topics-card',
  templateUrl: './topics-card.component.html',
  styleUrls: ['./topics-card.component.scss']
})
export class TopicsCardComponent implements OnInit {

  public sectionId = -1;
  public section!: TopicCard;
  constructor(
    private service: TopicsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sectionId = Number(params.get('section_id'));
      console.log(this.sectionId)
      this.getItem(this.sectionId);
    });
  }

  public getItem(sectionId: number) {
    this.service.get(sectionId).subscribe(
      (cards) => {
        this.section = cards;
      }
    )
  }

  public getDetail(answer: Answer) {
    this.router.navigate([`../../section/${answer.next_section_id}`], {relativeTo: this.route});
    //display error
  }

  public end() {
    this.router.navigate(['/'], {});
  }
}
