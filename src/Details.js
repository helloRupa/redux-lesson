import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import catLoading from './assets/cat_loading.gif';
import { fetchImage, fetchImageWithoutMiddleware } from './actions/catActions';

function Details({ selectedCat, img, loadState, fetchImage }) {
  console.log('render Details');

  useEffect(() => {
    fetchImage();
  }, []);

  const imageSrc = (loadState) ? catLoading : img;

  return (
    <div>
      <h2>Cat Details</h2>
      <img src={imageSrc} alt="Random Cat" width="300px" />
      <p>{ selectedCat }</p>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedCat: state.selectedCat,
  img: state.image.url,
  loadState: state.image.loadState
});

// export default Details;

// const mapDispatchToProps = dispatch => ({
//   fetchImage: () => fetchImageWithoutMiddleware(dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Details);
export default connect(mapStateToProps, { fetchImage })(Details);