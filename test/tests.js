import { renderPresidents, renderDetail, renderNav } from '../render-utils.js';

const test = QUnit.test;

const president = {
    'id': 1,
    'created_at': '2022-02-09T23:52:10+00:00',
    'name': 'Ulysses S. Grant',
    'years': '1869-1877',
    'party': 'Republican',
    'fun_fact': 'While almost penniless and dying of throat cancer from smoking so many cigars, he wrote his memoirs to try and raise some money. He died only a few days after finishing. They are regarded as not only some of the best presidential memoirs, but are also held in high literary regard for the quality of the writing.',
    'birthplace': 'Point Pleasant, Ohio',
    'image': 'grant.jpg'
};

const id = 3;

test('renderNav should create three html elements for nav', (expect) => {
    const expected = `<div id="nav"><a href="./?id=2"><span id="nav1">previous president</span></a><a href="../index.html"><span id="nav2">back to the list</span></a><a href="./?id=4"><span id="nav3">next president</span></a></div>`;

    const actual = renderNav(id);

    expect.equal(actual.outerHTML, expected);
});

test('renderDetail should return details element', (expect) => {
    const expected = `<div id="president-container"><h1>ULYSSES S. GRANT</h1><img src="../assets/grant.jpg"><p class="term">Years in office:</p><p class="term">1869-1877</p><p class="born">Birthplace:</p><p class="born">Point Pleasant, Ohio</p><p id="funfact">While almost penniless and dying of throat cancer from smoking so many cigars, he wrote his memoirs to try and raise some money. He died only a few days after finishing. They are regarded as not only some of the best presidential memoirs, but are also held in high literary regard for the quality of the writing.</p></div>`;

    const actual = renderDetail(president);

    expect.equal(actual.outerHTML, expected);
});


test('renderPresidents should return president elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./details/?id=1"><div class="presidents"><img src="./assets/grant.jpg"><p>Ulysses S. Grant</p></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPresidents(president);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
