import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  START_FETCHING,
} from './constants';
import {
  receivePlaces,
  receivePhotos,
  receiveError,
} from './actions';

const url = `${BASE_URL}/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323`;

export function* fetchPlaces(action) {
  try {
    const places = yield call(
      axios.get,
      `${url}&ll=${action.lat},${action.lng}&query=burger&limit=50`,
    );

    yield put(receivePlaces(places.data.response.groups[0].items));
    return places.data.response.groups[0].items.length;
  } catch (error) {
    yield put(receiveError(error));
  }
  return undefined;
}

let prevQuantity = null;
export function* fetchPhotos(quantity) {
  if (quantity > 0 && quantity !== prevQuantity) {
    try {
      const photos = yield call(
        axios.get,
        `https://pixabay.com/api/?key=9961307-d69b626d0edc5963b0ee27fe3&q=burger&image_type=photo&category=food&safesearch=true&per_page=${quantity}&min_width=600&min_height=450&orientation=horizontal`,
      );
      yield put(receivePhotos(photos.data.hits));
      prevQuantity = quantity;
    } catch (error) {
      yield put(receiveError(error));
    }
  }
}

export function* fetchAll(action) {
  const placesQuantity = yield call(fetchPlaces, action);
  yield call(fetchPhotos, placesQuantity);
}

export default function* watcher() {
  yield [takeLatest(START_FETCHING, fetchAll)];
}
