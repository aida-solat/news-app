import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './core/Main';
import { createBrowserHistory } from 'history';
import configureStore from './core/store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './core/screens/Home';

const store = configureStore();

const createHistory = createBrowserHistory();

function App() {
  // @ts-ignore
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/home" element={<Home />}/>
          {/* <Route path="articles/:id" element={<ArticleDetails />} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;