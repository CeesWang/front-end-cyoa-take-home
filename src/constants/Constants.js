const BASE = "localhost:3001"; 
const ENTRY_POINT = "http://" + BASE;

export const CREATE_COMMENT_URL = ENTRY_POINT + "/createComment";
export const DELETE_ALL_COMMENTS_URL = ENTRY_POINT + "/deleteComments";
export const GET_ALL_COMMENTS_URL = ENTRY_POINT + "/getComments";
export const GET_COMMENT_URL = ENTRY_POINT + "/getComment";
export const WEBSOCKET_URL = `ws://${BASE}/websocket`