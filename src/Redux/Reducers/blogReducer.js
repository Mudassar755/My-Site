import { CREATE_BLOG, GET_BLOG, GET_BLOGS, BLOG_ERROR } from "../Actions/types";
const initialState = {
  blog: null,
  blogs: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BLOG:
    case GET_BLOG:
      return {
        ...state,
        blog: payload,
        loading: false
      };

    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false
      };
    case BLOG_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
