export interface FormQuestion {
  id: string;
  question: string;
  block: string;
  options: {
    value: number;
    text: string;
  }[];
}

export interface QuestionBlockProps {
 blockName: string;
  questions: {
    id: string;
    question: string;
    block: string;
    options: {
      value: number;
      text: string;
    }[];
  }[];
  scores: Record<string, number | null>;
  onChange: (questionId: string, value: number) => void;
}
