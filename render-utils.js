export function renderPresidents(president) {
    const a = document.createElement('a');
    a.href = `./details/?id=${president.id}`;
    const div = document.createElement('div');
    div.classList = 'presidents';
    const img = document.createElement('img');
    img.src = `./assets/${president.image}`;
    const p = document.createElement('p');
    p.textContent = `${president.name}`;
    div.append(img, p);
    a.append(div);
    return a;
}

export function renderDetail(president) {
    const div = document.createElement('div');
    div.setAttribute('id', 'president-container');
    const h1 = document.createElement('h1');
    h1.textContent = `${president.name}`.toUpperCase();
    const img = document.createElement('img');
    img.src = `../assets/${president.image}`;
    const p1 = document.createElement('p');
    p1.classList = 'term';
    p1.textContent = 'Years in office:';
    const p2 = document.createElement('p');
    p2.classList = 'term';
    p2.textContent = `${president.years}`;
    const p3 = document.createElement('p');
    p3.classList = 'born';
    p3.textContent = `Birthplace:`;
    const p4 = document.createElement('p');
    p4.classList = 'born';
    p4.textContent = `${president.birthplace}`;
    const p5 = document.createElement('p');
    p5.setAttribute('id', 'funfact');
    p5.textContent = `${president.fun_fact}`;
    div.append(h1, img, p1, p2, p3, p4, p5);
    return div;
}