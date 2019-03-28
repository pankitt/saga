import fetch from 'isomorphic-fetch';

export const REQUESTED_DOG = 'REQUESTED_DOG';
export const REQUESTED_DOG_SUCCEEDED = 'REQUESTED_DOG_SUCCEEDED';
export const REQUESTED_DOG_FAILED = 'REQUESTED_DOG_FAILED';

const requestDog = () => {
    return { type: REQUESTED_DOG }
};

const requestDogSuccess = (data) => {
    return { type: REQUESTED_DOG_SUCCEEDED, url: data.message }
};

const requestDogaError = () => {
    return { type: REQUESTED_DOG_FAILED }
};

export const fetchDog = () => {
    return (dispatch) => {
        dispatch(requestDog());
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(
                data => dispatch(requestDogSuccess(data)),
                err => dispatch(requestDogaError(err))
            );
    }
};
