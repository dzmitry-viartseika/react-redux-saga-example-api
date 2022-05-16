import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";

function* loadBlogData() {
    console.log('loadBlogData');
    try {
        let result = null;
        yield axios.get<any>(`https://swapi.dev/api/vehicles`)
            .then((response) => {
                console.log('response', response);
                result = response.data.results;
            })
        console.log('blog data', result);
        yield put({
            type: 'BLOGS_LOADED',
            payload: result,
        })
    } catch (e) {
        console.error(e);
    }
}

export default function* pageLoaderSaga() {
    console.log('LOAD_BLOG_DATA');
    yield takeEvery('LOAD_BLOG_DATA', loadBlogData);
}
