const initialState = {
  cats: ["Meowser", "Charlie", "Fluffanilla"],
  selectedCat: "Meowser",
  image: {
    url: '',
    loadState: true
  }
};

function catReducer(state=initialState, action) {
  switch(action.type) {
    case "ADD_CAT":
      return {
        ...state,
        cats: [...state.cats, action.cat]
      };
    case "SELECT_CAT":
      if (state.cats.includes(action.cat)) {
        return {
          ...state,
          selectedCat: action.cat
        }
      }

      return state;
    case "SET_IMAGE":
      return {
        ...state,
        image: {
          ...state.image,
          url: action.url,
          loadState: false
        }
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        image: {
          ...state.image,
          loadState: action.loadState
        }
      };
    default:
      return state;
  }
}

export default catReducer;
