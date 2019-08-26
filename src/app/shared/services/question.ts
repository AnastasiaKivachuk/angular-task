export class Question {
  qid: string;
  title: string;
  text: string;
  HTML: boolean = true;
  CSS: boolean;
  JS: boolean;
  date: Date = new Date();
}
