import React from 'react';
import { connect } from 'react-redux';

function Details({ selectedCat }) {
  console.log('render Details');

  return (
    <div>
      <h2>Cat Details</h2>
      <p>{ selectedCat }</p>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedCat: state.selectedCat
});

// export default Details;
export default connect(mapStateToProps)(Details);