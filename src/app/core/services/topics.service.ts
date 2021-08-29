import {Injectable} from '@angular/core';
import {Pagination, Topic, TopicCard} from "../models/common.model";
import {Observable, of} from "rxjs";
import {BaseService} from "./base.service";
import {sectionsLocal} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TopicsService extends BaseService {

  constructor() {
    super();
  }


  public getAll(pagination: Pagination): Observable<Topic[]> {
    return of([
      Object.assign(new Topic(), {
        id: 1,
        title: "¿Puede ayudarnos la Biblia a hacer frente a las preocupaciones?",
        author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
      }),
      Object.assign(new Topic(), {
        id: 2,
        title: "Conocimiento que lleva a la vida eterna",
        author: {id: 1, first_name: "Merarda", last_name: "de Escudero"},
      }),
      Object.assign(new Topic(), {
        id: 3,
        title: "Por que sufre el justo",
        author: {id: 1, first_name: "Merarda", last_name: "de Escudero"},
      }),
      Object.assign(new Topic(), {
        id: 4,
        title: "Inquietudes de la vida",
        author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
      }),
    ]);
  }

  public getByRoot(rootSectionId: number): Observable<TopicCard[]> {
    return of(this.makeList(sectionsLocal.filter((item, key) => item.parent_id === rootSectionId)));
  }

  public get(sectionId: number): Observable<TopicCard> {
    return of(Object.assign(new TopicCard(), sectionsLocal.find((item, key) =>
      item.id == sectionId)
    ));
  }

  private makeList(response: any) {
    console.log(response)
    let list: TopicCard[] = [];
    if (response instanceof Array) {
      Object.keys(response).forEach((item, key) => {
        list[key] = Object.assign(response[key], new TopicCard());
      });
    }

    return list;
  }
}
