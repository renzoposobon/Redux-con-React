import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExternalApp from './App';
import { createStore } from "redux"; 

const actionIncremented = {
  type: '@counter/incremented'
}

const actionDecremented = {
  type: '@counter/decremented'
}

const actionReset = {
  type: '@counter/reset'
}

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case '@counter/incremented':
      return state + 1;
    case '@counter/decremented':
      return state - 1;
    case '@counter/reset':
      return 0;
    default:
      return state
  }
}

const store = createStore(counterReducer)

const AppComponent = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <div>
        <button
          onClick={() => store.dispatch(actionIncremented)}
        >
          +
        </button>
        <button
          onClick={() => store.dispatch(actionDecremented)}
        >
          -
        </button>
        <button
          onClick={() => store.dispatch(actionReset)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <AppComponent />
  );
}

renderApp()
store.subscribe(renderApp)