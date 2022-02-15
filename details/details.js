import { renderDetail, renderNav } from '../render-utils.js';
import { getPresident } from '../fetch-utils.js';

const body = document.getElementById('main-body');

window.addEventListener('load', async() =>{
    const params = new URLSearchParams(window.location.search);
    const id = +params.get('id');
    const president = await getPresident(id);
    body.append(renderNav(id), renderDetail(president));
});

