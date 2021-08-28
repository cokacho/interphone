export abstract class Person {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;

  public abstract getInfo(): any;
}

export abstract class Section {
  id!: number;
  title!: string;
  slug!: string;
  content!: string;
  author!: Person;
}


export abstract class Option {
  id!: number;
  text!: string;
  next_section_id!: number;
}
