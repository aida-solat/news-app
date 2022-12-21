import { Article } from '../reducers/appReducer';

export const SET_LOADING = 'app/SET_LOADING';
export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export const SET_LOADING_FALSE = 'app/SET_LOADING_FALSE';
export interface SetLoadingFalseAction {
  type: typeof SET_LOADING_FALSE;
}

export const LOAD_ARTICLE_REQUEST = 'app/LOAD_ARTICLE_REQUEST';
export interface LoadArticleRequest {
  type: typeof LOAD_ARTICLE_REQUEST;
}

export const LOAD_ARTICLE_SUCCESS = 'app/LOAD_ARTICLE_SUCCESS';
export interface LoadArticleSuccess {
  type: typeof LOAD_ARTICLE_SUCCESS;
  payload: Article[];
}

export const LOAD_ARTICLE_FAILURE = 'app/LOAD_ARTICLE_FAILURE';
export interface LoadArticleFailure {
  type: typeof LOAD_ARTICLE_FAILURE;
  payload: Article[];
}

