export interface Question {
  title: string;
  text: string;
  author?: string;
  HTML: boolean;
  CSS: boolean;
  JS: boolean;
  date?: Date;
  isApproved?;
  isAnswered?;
  comments?: [],
  id?: string;
}
