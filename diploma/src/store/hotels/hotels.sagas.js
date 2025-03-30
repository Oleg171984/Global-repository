// import { call, put, takeLatest } from 'redux-saga/effects';
// import { 
//   FETCH_HOTELS_ACTION, 
//   FETCH_HOTELS_SUCCESS, 
//   FETCH_HOTELS_FAILED } from './hotels.actions';
// import { get } from '../../api/httpClient';

// function* fetchHotelsSaga(action) {
//   try {
//     const response = yield call(get, '/hotels', action.payload);
//     yield put(FETCH_HOTELS_SUCCESS(response));
//   } catch (error) {
//     console.error('Failed to fetch hotels:', error);
//     yield put(FETCH_HOTELS_FAILED(error.message));
//   }
// }

// export default function* hotelsSaga() {
//   yield takeLatest(FETCH_HOTELS_ACTION, fetchHotelsSaga);
// }

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_HOTELS_ACTION, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILED } from './hotels.actions.js';
import { getHotels } from '@api';

export function* fetchHotelsSaga({ payload }) {
  try {
    const data = yield call(getHotels, payload);

    const preparedData = data.map((el) => ({
      ...el,
      phone: el.phone_number,
    }));

    yield put(FETCH_HOTELS_SUCCESS(preparedData));
  } catch (error) {
    yield put(FETCH_HOTELS_FAILED(error.message));
  }
}

export function* watchFetchHotelsSagas() {
  yield takeLatest(FETCH_HOTELS_ACTION.type, fetchHotelsSaga);
}
