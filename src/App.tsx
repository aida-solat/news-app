import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './core/Main';
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './core/screens/Home';
import rootReducer from './core/reducers/rootReducer';
import ArticleDetail from './core/screens/ArticleDetail';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});



const queryClient = new QueryClient()


const createHistory = createBrowserHistory();

function App() {
  // @ts-ignore
  return (

    <BrowserRouter>
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="articles/:id" element={<ArticleDetail />} />
          </Routes>
    </QueryClientProvider>
          
      </Provider>
      </BrowserRouter>
  );
}

export default App;