import { Article } from '../reducers/appReducer';

export const SET_LOADING = 'SET_LOADING';
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
export const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE';

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

export interface SetLoadingFalseAction {
    type: typeof SET_LOADING_FALSE;
}

export interface LoadArticleRequest {
    type: typeof LOAD_ARTICLE_REQUEST;
}

export interface LoadArticleSuccess {
    type: typeof LOAD_ARTICLE_SUCCESS;
    payload: Article[];
}

export interface LoadArticleFailure {
    type: typeof LOAD_ARTICLE_FAILURE;
}

export type AppActions = SetLoadingAction | SetLoadingFalseAction | LoadArticleRequest | LoadArticleSuccess | LoadArticleFailure;

export const setLoading = (payload: boolean): SetLoadingAction => {
    return {
        type: SET_LOADING,
        payload
    };
};

export const setLoadingFalse = (): SetLoadingFalseAction => {
    return {
        type: SET_LOADING_FALSE
    };
};

export const loadArticleRequest = (): LoadArticleRequest => {
    return {
        type: LOAD_ARTICLE_REQUEST
    };
};

export const loadArticleSuccess = (payload: Article[]): LoadArticleSuccess => {
    return {
        type: LOAD_ARTICLE_SUCCESS,
        payload
    };
};

export const loadArticleFailure = (): LoadArticleFailure => {
    return {
        type: LOAD_ARTICLE_FAILURE
    };
};

export const loadArticles = () => {
    return (dispatch: any) => {
        dispatch(loadArticleRequest());
        fetch('https://api.spacexdata.com/v3/articles')
            .then(res => res.json())
            .then(data => {
                dispatch(loadArticleSuccess(data));
            })
            .catch(err => {
                dispatch(loadArticleFailure());
            });
    };
};


