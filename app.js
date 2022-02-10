import { getPresidents } from './fetch-utils.js';

const presidents = await getPresidents();

console.log(presidents, 'presidents');