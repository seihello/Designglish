import Progress from "../enum/progress.enum";

type Word = {
  id: number;
  title: string;
  meaning: string;
  sentences: string[];
  progress: Progress;
}

export default Word;