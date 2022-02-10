import { getPresidents } from './fetch-utils.js';

window.addEventListener('load', async() => {
    const presidents = await getPresidents();
    console.log(presidents, 'presidents');
});
