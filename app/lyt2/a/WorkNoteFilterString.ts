import { CommentsModel } from "../../../lib/OtherFunctions/CommentFilterString";

export function WorkNoteFilterString(worknote: string): CommentsModel[] {
  const WorknoteLists: CommentsModel[] = [];
  const searchTerm_worknote = "(Work notes)";
  const WorkNote_Count = 12;

  let loopContinue = 1;
  let current_string = (" " + worknote).slice(1);
  while (loopContinue > 0) {
    const indexOfFirst = current_string.indexOf(searchTerm_worknote);
    const secondIndexof_comment = current_string.indexOf(
      searchTerm_worknote,
      indexOfFirst + 5,
    );
    loopContinue = secondIndexof_comment;
    const last_index_of_current_comment =
      secondIndexof_comment <= 0
        ? current_string.length
        : secondIndexof_comment;
    const name_with_date = current_string.substring(0, indexOfFirst);
    const index_of_hifen = name_with_date.lastIndexOf("-");
    const comment_date = name_with_date.substring(0, index_of_hifen);
    const comment_user = name_with_date.substring(index_of_hifen + 2);
    const firstComment_with_error = current_string.substring(
      indexOfFirst + WorkNote_Count,
      last_index_of_current_comment,
    );
    const last_index_of_next_Line = firstComment_with_error.lastIndexOf("\n");
    let comment_text = "";
    if (last_index_of_next_Line <= 0) {
      comment_text = firstComment_with_error;
    } else {
      comment_text = firstComment_with_error.substring(
        0,
        last_index_of_next_Line,
      );
    }
    const commentModel: CommentsModel = {
      userName: comment_user,
      dateTime: comment_date,
      commentsOfUser: comment_text,
    };
    WorknoteLists.push(commentModel);
    const current_comment = current_string.substring(
      0,
      last_index_of_current_comment,
    );
    const current_comment_last_next_line = current_comment.lastIndexOf("\n");
    if (current_comment_last_next_line <= 0) {
      current_string = "";
    } else {
      current_string = current_string.substring(
        current_comment_last_next_line,
        current_string.length,
      );
    }
    //console.log(current_string);
  }
  return WorknoteLists;
}
