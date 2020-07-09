import React from 'react';
import { connect } from 'react-redux';
import { selectCat, fetchImage, fetchImageWithoutMiddleware } from './actions/catActions';

function MenuItem({ catName, selectCat, fetchImage }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    selectCat(e.target.textContent);
    fetchImage();
  };

  return (
    <div onClick={ handleClick }>{catName}</div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   selectCat: cat => dispatch(selectCat(cat)),
//   fetchImage: () => fetchImageWithoutMiddleware(dispatch)
// });

// export default connect(null, mapDispatchToProps)(MenuItem);

export default connect(null, { selectCat, fetchImage })(MenuItem);