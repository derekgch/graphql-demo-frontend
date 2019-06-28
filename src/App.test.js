import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import BucketContainer from './Components/BucketContainer';
import FruitsContainer from './Components/FruitsContainer';
import App from './App';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});




it('renders App without crashing', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
});

it('renders BucketContainer without crashing', () => {
  act(() => {
    const dummy_data=[];
    ReactDOM.render(<BucketContainer />, container);
  });
});

it('renders FruitsContainer without crashing', () => {
  act(() => {
    const dummy_data=[];
    ReactDOM.render(<FruitsContainer />, container);
  });
});

// it('can render and update a counter', () => {
//   // Test first render and componentDidMount
//   act(() => {
//     ReactDOM.render(<Counter />, container);
//   });
//   const button = container.querySelector('button');
//   const label = container.querySelector('p');
//   expect(label.textContent).toBe('You clicked 0 times');
//   expect(document.title).toBe('You clicked 0 times');

//   // Test second render and componentDidUpdate
//   act(() => {
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//   });
//   expect(label.textContent).toBe('You clicked 1 times');
//   expect(document.title).toBe('You clicked 1 times');
// });

