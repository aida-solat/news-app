import { takeEvery, put,call } from 'redux-saga/effects';
import { LOAD_ARTICLE_REQUEST, LoadArticleRequest} from '../actionTypes/appActions';
import { loadArticleFailure, loadArticleSuccess, setLoading, setLoadingFalse } from '../actions/appActions';
import { getArticles } from '../service/api';


function* loadArticles(action: LoadArticleRequest) {
    try {
        yield put(setLoading(true));
        const articles: [] = yield call(getArticles);
        yield put(setLoadingFalse());
        yield put(loadArticleSuccess(articles));
    } catch (e: any) {
        yield put(setLoadingFalse());
        yield put(loadArticleFailure());
    }
}

    
export function* appSaga() {
    yield takeEvery(LOAD_ARTICLE_REQUEST, loadArticles);
}









