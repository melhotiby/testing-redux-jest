import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
import { COMMENTS_API_URL } from "constants/index";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get(COMMENTS_API_URL);

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
