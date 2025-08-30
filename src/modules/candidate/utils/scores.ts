import { formQuestions } from "./formQuestions";

interface Scores {
  [key: string]: number | null;
}

export const initialScores = formQuestions.reduce((acc: Scores, q) => {
  acc[q.id] = null;
  return acc;
}, {} as Scores);
