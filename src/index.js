import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GlobalStyle } from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/budget-boss-mvp.">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
