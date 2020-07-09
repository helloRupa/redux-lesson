import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat, selectCat, fetchImage, fetchImageWithoutMiddleware } from './actions/catActions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCat: ''
    };
  }

  handleChange = e => {
    this.setState({newCat: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCat(this.state.newCat);
    this.props.selectCat(this.state.newCat);
    this.props.fetchImage();
    this.setState({newCat: ''});
  }

  render() {
    console.log('render form');

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a Cat</h2>
        <input type="text" value={this.state.newCat} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

// export default Form;

// const mapDispatchToProps = dispatch => ({
//   addCat: cat => dispatch(addCat(cat)),
//   selectCat: cat => dispatch(selectCat(cat)),
//   fetchImage: () => fetchImageWithoutMiddleware(dispatch)
// });

// export default connect(null, mapDispatchToProps)(Form);

export default connect(null, { addCat, selectCat, fetchImage })(Form);
