import { Component, OnInit } from '@angular/core';
import {TopicsService} from "../../../../core/services/topics.service";
import {Pagination, Topic} from "../../../../core/models/common.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  public list: Topic[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TopicsService
  ) { }

  ngOnInit(): void {
    const pagination = new Pagination();
    pagination.limit = 10;
    pagination.page = 1;
    this.service.getAll(pagination).subscribe(
      (list) => {
        this.list = list;
      }
    )
  }

  public getDetail(item: Topic) {
    this.router.navigate([item.id], { relativeTo: this.route });
  }
}
