import React from 'react';
import { connect } from 'react-redux';
import { selectCat } from './actions/catActions';

function MenuItem({ catName, selectCat }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    selectCat(e.target.textContent);
  };

  return (
    <div onClick={ handleClick }>{catName}</div>
  )
}

// export default MenuItem;

// const mapDispatchToProps = dispatch => ({
//   selectCat: cat => dispatch({ type: 'SELECT_CAT', cat: cat })
// });

export default connect(null, { selectCat })(MenuItem);