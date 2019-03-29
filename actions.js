import fetch from 'isomorphic-fetch';
import { takeEvery, put, call } from 'redux-saga/effects';

export const REQUESTED_DOG = 'REQUESTED_DOG';
export const REQUESTED_DOG_SUCCEEDED = 'REQUESTED_DOG_SUCCEEDED';
export const REQUESTED_DOG_FAILED = 'REQUESTED_DOG_FAILED';
export const FETCHED_DOG = 'FETCHED_DOG';

const requestDog = () => {
    return { type: REQUESTED_DOG }
};

const requestDogSuccess = (data) => {
    return { type: REQUESTED_DOG_SUCCEEDED, url: data.message }
};

const requestDogError = () => {
    return { type: REQUESTED_DOG_FAILED }
};

// export const fetchDog = () => {
//     return (dispatch) => {
//         dispatch(requestDog());
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(res => res.json())
//             .then(
//                 data => dispatch(requestDogSuccess(data)),
//                 err => dispatch(requestDogError(err))
//             );
//     }
// };

export const fetchDog = () => {
    return { type: FETCHED_DOG }
};

function* fetchDogAsync() {
    try {
        yield put(requestDog());
        const data = yield call(() => {
                return fetch('https://dog.ceo/api/breeds/image/random')
                    .then(res => res.json())
            }
        );
        yield put(requestDogSuccess(data));
    } catch (error) {
        yield put(requestDogError());
    }
}

export function* watchFetchDog() {
    yield takeEvery(FETCHED_DOG, fetchDogAsync);
}


