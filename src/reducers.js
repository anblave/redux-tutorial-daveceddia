import { INCREMENT, DECREMENT, RESET } from "./actions";
import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from "./actions";

const counterInitialState = {
  count: 0
};

const imagesInitialState = {
  loading: false,
  error: null,
  images: []
};

export function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

export function imagesReducer(state = imagesInitialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        images: action.payload.images
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
