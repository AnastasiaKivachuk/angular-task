export interface Question {
  title: string;
  text: string;
  author?: string;
  HTML: boolean;
  CSS: boolean;
  JS: boolean;
  date?: Date;
  isApproved?:boolean;
  isAnswered?:boolean;
  comments?: Comments[],
  id?: string;
}

export interface Comments {
  textComment: string;
  author?: string;
  date?: string;
  isResolved?: boolean;
}
