import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicsComponent } from './topics.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { TopicsCardComponent } from './topics-card/topics-card.component';


@NgModule({
  declarations: [
    TopicListComponent,
    TopicDetailComponent,
    TopicsComponent,
    TopicsCardComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TopicsModule { }
