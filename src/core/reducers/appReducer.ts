
import * as actions from '../actionTypes/appActions';
    

export interface Article {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: [];
  events: [];
}

export interface AppReducerState  {
  articles: Article[];
  isLoading: boolean;
  error: boolean;
}

const appReducers = (
    state: AppReducerState = {
        articles: [],
        isLoading: false,
        error: false
    }, action: 

    | actions.SetLoadingAction
    | actions.SetLoadingFalseAction
    | actions.LoadArticleRequest
    | actions.LoadArticleSuccess
    | actions.LoadArticleFailure
    
    ) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case actions.SET_LOADING_FALSE:
            return {
                ...state,
                isLoading: false
            };
        case actions.LOAD_ARTICLE_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                isLoading: false
            };
        case actions.LOAD_ARTICLE_FAILURE:
            return {
                ...state,
                articles: [],
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
};

export default appReducers;