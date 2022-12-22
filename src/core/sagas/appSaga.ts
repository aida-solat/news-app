import { takeEvery, put,call } from 'redux-saga/effects';
import { LOAD_ARTICLE_REQUEST, LoadArticleRequest} from '../actionTypes/appActions';
import { loadArticleFailure, loadArticleSuccess, setLoading, setLoadingFalse } from '../actions/appActionCreators';
import { getLatestArticles } from '../service/api';


function* loadArticles(action: LoadArticleRequest) {
    try {
        yield put(setLoading(true));
        const articles:[] = yield call(getLatestArticles);
        yield put(setLoadingFalse());
        yield put(loadArticleSuccess(articles));
    } catch (e: any) {
        yield put(setLoadingFalse());
        yield put(loadArticleFailure(e.message));
    }
}


    
export function* appSaga() {
    yield takeEvery(LOAD_ARTICLE_REQUEST, loadArticles);
}







