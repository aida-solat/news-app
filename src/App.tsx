import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./core/screens/Home";
import rootReducer from "./core/reducers/rootReducer";
import ArticleDetail from "./core/screens/ArticleDetail";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AppReducerState } from "./core/reducers/appReducer";
import { loadArticles } from "./core/actions/appActions";

interface AppProps {
  loadArticles: () => void;
  articles: AppReducerState["articles"];
  isLoading: AppReducerState["isLoading"];
  error: AppReducerState["error"];
}

const queryClient = new QueryClient();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const App: React.FC<AppProps> = ({
  loadArticles,
  articles,
  isLoading,
  error,
}) => {
  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {articles && <Home articles={articles} />}
            <Route path='/news-app' element={<Home />} />
            <Route path='articles/:id' element={<ArticleDetail />} />
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: AppReducerState) => ({
  articles: state.articles,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadArticles: () => dispatch(loadArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
