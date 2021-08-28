import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicListComponent} from "./topic-list/topic-list.component";
import {TopicDetailComponent} from "./topic-detail/topic-detail.component";
import {TopicsCardComponent} from "./topics-card/topics-card.component";

const routes: Routes = [
  {
    path: "",
    component: TopicListComponent
  },
  {
    path: ":topic_id",
    component: TopicDetailComponent
  },
  {
    path: ":topic_id/section/:section_id",
    component: TopicsCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
