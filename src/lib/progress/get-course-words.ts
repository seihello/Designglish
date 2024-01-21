import Progress from "../../enum/progress.enum";
import Word from "../../types/word.type";
import { supabase } from "../supabase";
import getWordProgress from "./get-word-progress";

export default async function getCourseWords(
  // courseId: number,
): Promise<Word[]> {
  try {
    const { data, error } = await supabase
      .from("words")
      .select("*, sentences(sentence)");
    if (error) {
      throw new Error(error.message);
    }

    const words: Word[] = [];
    if (data) {
      for (const wordRow of data) {
        const sentences: string[] = wordRow.sentences.map(
          (sentence: any) => sentence.sentence,
        );
        let progress = Progress.Unknown;
        try {
          progress = await getWordProgress(wordRow.id);
        } catch (error) {
          console.error(error);
        }
        words.push({ ...wordRow, sentences, progress });
      }
      // const words = data.map((row) => {
      //   const sentences = row.sentences.map(
      //     (sentence: any) => sentence.sentence,
      //   );
      //   const progress = await getWordProgress
      //   return { ...row, sentences,  };
      // });
    }
    return words;
  } catch (error) {
    throw error;
  }
}
