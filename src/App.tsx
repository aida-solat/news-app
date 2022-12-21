import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './core/Main';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './core/store/configureStore';
import Home from './core/screens/home/Home';
import Articles from './core/screens/home/Articles';
import ArticleDetails from './core/screens/home/ArticleDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const createHistory = createBrowserHistory();

function App() {
  // @ts-ignore
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            {' '}
          </Route>
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;