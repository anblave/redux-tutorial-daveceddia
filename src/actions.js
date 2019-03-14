export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const FETCH_IMAGES_FAILURE = "FETCH_IMAGES_FAILURE";

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const resetIt = () => ({ type: RESET });

export const fetchImagesRequest = () => ({
  type: FETCH_IMAGES_REQUEST
});

export const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: { images }
});

export const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: { error }
});

export function fetchImages() {
  const urlJson = "https://jsonplaceholder.typicode.com/photos?albumId=2";
  return dispatch => {
    dispatch(fetchImagesRequest());
    return fetch(urlJson)
      .then(res => res.json())
      .then(json => {
        const sliceResult = json.slice(0, 3);
        dispatch(fetchImagesSuccess(sliceResult));
        return sliceResult;
      })
      .catch(err => {
        dispatch(fetchImagesFailure(err));
      });
  };
}
