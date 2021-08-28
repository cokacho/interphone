import {Option, Person, Section} from "../_base/base.model";

export class Pagination {
  query!: string;
  page!: number;
  sort!: string;
  limit!: number;

}

export class Author implements Person{
  email!: string;
  first_name!: string;
  id!: number;
  last_name!: string;

  public getInfo(): any {
  }

}

export class Topic implements Section {
  id!: number;
  title!: string
  author!: Author;
  content!: string;
  slug!: string;

}

export class TopicCard implements Section {
  answers?: Answer[];
  author!: Author;
  content!: string;
  id!: number;
  slug!: string;
  title!: string;
  parent_id!: number;

  public getFlatContent() {
  }

  public getHtmlContent() {
  }

}

export class Answer implements Option {
  id!: number;
  text!: string;
  type!: string;
  next_section_id!: number;
}
