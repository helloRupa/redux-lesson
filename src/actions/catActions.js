export function addCat(cat) {
  return {
    type: 'ADD_CAT',
    cat
  };
};

export function selectCat(cat) {
  return {
    type: 'SELECT_CAT',
    cat
  };
};

export function setImage(url) {
  return {
    type: 'SET_IMAGE',
    url
  };
};

export const isLoading = {
  type: 'SET_IS_LOADING',
  loadState: true
};

export function fetchImageWithoutMiddleware(dispatch) {
  dispatch(isLoading);

  return fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(cat => {
    dispatch(setImage(cat[0].url));
  });
};

export function fetchImage() {  
  return (dispatch) => {
    dispatch(isLoading);

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(cat => {
      dispatch(setImage(cat[0].url));
    });
  };
};
