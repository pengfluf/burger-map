import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  START_FETCHING,
} from './constants';
import { takeBurgers, receiveError } from './actions';

const url = `${BASE_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323`;

export function* fetchBurgers(action) {
  try {
    const res = yield call(
      axios.get,
      `${url}&ll=${action.lat},${
        action.lng
      }&query=burger&limit=50&venuePhotos=1`,
    );

    yield put(takeBurgers(res.data.response.groups[0].items));
  } catch (error) {
    yield put(receiveError(error));
  }
}

export default function* watcher() {
  yield [takeLatest(START_FETCHING, fetchBurgers)];
}
