import Progress from "../../enum/progress.enum";
import { supabase } from "../supabase";
import getWordProgress from "./get-word-progress";

export default async function getCourseProgress(/*courseId: number*/) {
  try {
    const { data, error } = await supabase.from("words").select("id");
    if (error) {
      throw new Error(error.message);
    }

    let masteredCount = 0;
    for (const wordRow of data) {
      const progress: Progress = await getWordProgress(wordRow.id);
      if (progress === Progress.Mastered) {
        masteredCount++;
      }
    }

    return { total: data.length, masteredCount: masteredCount };
  } catch (error) {
    throw error;
  }
}
