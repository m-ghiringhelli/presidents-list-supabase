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