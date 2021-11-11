import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

describe('App', () => {
  it('should render', () => {
    expect(
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      ),
    ).toBeTruthy();
  });
});
