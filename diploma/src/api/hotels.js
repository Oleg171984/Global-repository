import { get } from './httpClient.js';

export async function getHotels(signal) {
  let test = await get('hotels', signal);
  debugger;
  return test;
}
