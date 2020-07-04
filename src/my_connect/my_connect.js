import React, { Component } from 'react';
import { createStore } from 'redux';
import woofyReducer from './woofyReducer';


const store = createStore(woofyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/**************************************************************************************/
/* myConnect() replicates the core functionality of connect()                         */
/* Except instead of using React's context feature, it just dumps a store in it       */
/* The wrapped component only updates (via subscribe()) if its slice of state changes */
/* The slice of state is determined by mapStateToProps                                */
/* Unlike connect(), mapDispatchToProps cannot be an object in myConnect()            */
/**************************************************************************************/

function myConnect(mapStateToProps, mapDispatchToProps) {
  return function(Wrapped) {
    return class ConnectedComponent extends Component {
      componentDidMount() {
        this.oldStateSlice = mapStateToProps(store.getState());

        this.unsubscribe = store.subscribe(() => {
          const stateSlice = mapStateToProps(store.getState());

          for (const key in stateSlice) {
            if (this.oldStateSlice[key] !== stateSlice[key]) {
              this.oldStateSlice = stateSlice;
              this.forceUpdate();
            }
          }
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <Wrapped {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />
      }
    }
  }
}

export default myConnect;

