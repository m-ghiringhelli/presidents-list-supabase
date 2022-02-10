import { getPresidents } from './fetch-utils.js';
import { renderPresidents } from './render-utils.js';

const presContainer = document.getElementById('presidents-container');

window.addEventListener('load', async() => {
    const presidents = await getPresidents();
    console.log(presidents, 'presidents');
    for (let president of presidents) {
        const presEl = renderPresidents(president);
        presContainer.append(presEl);
    }
});
