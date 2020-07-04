# Redux in React Part 2, aka react-redux
Let's use react-redux instead of just redux.

## By the end of this lesson, you should be able to:
Add a centralized store to your app and connect components to it using the tools provided by Redux and React-Redux.

## But Why?
React-Redux makes it easier for us to ensure that our components only update when the slices of state that they're interested in change. This means there is less needless re-rendering of components. Also, React-Redux can help us make our code more modular and reusable! Lastly, we no longer have to pass around the store or put it on the window to make it available to our components.

## How we'll get there:
- Update our puzzle pieces (mental jigsaw), so we know which pieces we have to work with
- Convert our cat app to use Redux and React-Redux

## Updated Puzzle Pieces

Redux Only | React-Redux | Purpose
-----------|-------------|-----------
createStore(reducer) | createStore(reducer) | Create the store
window.store = store | < Provider store={store} /> | Make store available to components
reducer | reducer | Set the initial state and handle actions (state change requests)
combineReducers(reducersPOJO) | combineReducers(reducersPOJO) | Allow different reducers to handle slices of state
actions | actions | Define change requests that update state
dispatch(action) | dispatch(action) | Dispatch actions to the store to change state
window.store.getState().property | mapStateToProps | Read from state to make certain slices available to components
window.store.dispatch(action) | mapDispatchToProps | Dispatch actions from components to update state in store
N/A | connect(mapStateToProps, mapDispatchToProps) | Wrap component in another component to make slices of state and dispatch available as props
store.subscribe(listener) | connect(mapStateToProps, mapDispatchToProps) | Update component only when its slice of state changes (Yes, connect is doing all of the jobs!)

**Pieces from the redux package** 
- `createStore(reducer)`: function that returns the store
- `combineReducers(reducersPOJO)`: function that returns a function combining reducers

**Pieces from the react-redux package**
- `Provider`: Component that typically wraps App and makes the store available to `connect`ed components. It provides access to the store via a React feature called Contexts.
```
<Provider store={store}>
  <App />
</Provider>
```
- `connect(mapStateToProps, mapDispatchToProps)(Component)`: function that connects slices of state and the dispatching of specific actions to a component. The first call returns an HOC and takes a component as an argument. The second call returns a wrapped component that has the specified slices of state and actions connected to it. Either of the arguments can be null if the component doesn't read from state or update it.

**Custom pieces we build ourselves**
- Reducer/s: pure functions that contain a switch statement. Sets the initial state and determines what happens based on action type. Always returns state.
- Actions or action creators: object containing one mandatory key (type) and one optional key (payload). Serve as state change requests.
- `mapStateToProps`: function that receives the state as an argument (is called inside of connect with state). Returns an object where the keys map to prop names and the values are the values stored in the store's state.
- `mapDispatchToProps`: function that receives dispatch as an argument (is called inside of connect with dispatch). Returns an object where the keys map to prop names and the values are functions that dispatch specific actions that update state.

```
function CatComponent({ cats, selectedCat, addCat, selectCat }) {
  return <div>
    // some code and stuff for rendering this component
  </div>
}

const mapStateToProps = state => ({
  cats: state.cats,
  selectedCat: state.selectedCat
});

const mapDispatchToProps = dispatch => ({
  addCat: cat => dispatch(addCat(cat)),
  selectCat: cat => dispatch(selectCat(cat))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatComponent);
```

> Note: If using action creators, `mapDispatchToProps` can be replaced with a simple object `connect(mapStateToProps, { addCat, selectCat })(Component)`

## Import redux and react-redux into the project
`npm install redux && npm install react-redux`

## React-Redux Checklist:
Don't forget to import the necessary functions and components from the redux and react-redux libraries, as well as your actions and reducers, in each Component file that depends on them!

1. Create the store with a reducer (or combined reducers using combineReducers). Make sure it's setting the correct initial state.
2. Wrap App (or some other top-level component) in a Provider. Provider requires the store as a prop.
```
<Provider store={store}>
  <App />
</Provider>
```
3. Declare some actions or action creators that represent state change requests.
4. Update reducer/s to respond to those actions. Test the reducer/s.
5. Connect components to the store using `connect`:
    - If a component ONLY needs to READ from state, mapStateToProps: `connect(mapStateToProps)(ComponentName)`
    - If a component ONLY needs to UPDATE state, mapDispatchToProps: `connect(null, mapDispatchToProps)(ComponentName)`
    - If a component READS and UPDATES state: `connect(mapStateToProps, mapDispatchToProps)(ComponentName)`
    - Update the component to use the props you just added (keys from mapStateToProps and mapDispatchToProps)
    - Export the connected component

## my_react_redux
If you'd like to see how connect() and Provider might work under the hood, check out the my_react_redux folder.

In index.js, you'll need to comment out the importing and rendering of App, and comment in the importing and rendering of MyReactRedux.
