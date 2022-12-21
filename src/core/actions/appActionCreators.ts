import * as actions from '../actionTypes/appActions';

export function setLoadingFalse(): actions.SetLoadingFalseAction {
  return {
    type: actions.SET_LOADING_FALSE
  };
}

export function setLoading(payload: boolean): actions.SetLoadingAction {
  return {
    type: actions.SET_LOADING,
    payload
  };
}

export function loadArticles(): actions.LoadArticleRequest {
  return {
    type: actions.LOAD_ARTICLE_REQUEST
  };
}

export function loadArticleSuccess(payload: []): actions.LoadArticleSuccess {
  return {
    type: actions.LOAD_ARTICLE_SUCCESS,
    payload
  };
}

export function loadArticleFailure(payload: []): actions.LoadArticleFailure {
  return {
    type: actions.LOAD_ARTICLE_FAILURE,
    payload
  };
}

