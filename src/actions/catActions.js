export function addCat(cat) {
  return {
    type: 'ADD_CAT',
    cat: cat
  };
};

export function selectCat(cat) {
  return {
    type: 'SELECT_CAT',
    cat: cat
  };
};
