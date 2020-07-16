// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderClothes } from '../products/renderClothes.js';

const test = QUnit.test;

test('renders a clothing item', assert => {
    //Arrange
    const faceMask = {
        id: 'face-mask',
        name: 'Face Mask',
        image: './face-mask.jpg',
        size: 'one-size',
        color: 'multi',
        category: 'face-mask',
        description: 'Reusable 4-Layer Silk-Blend Face Mask',
        price: 5
    };
    // Set up your arguments and expectations
    const expected = '<li class="face-mask" title="Reusable 4-Layer Silk-Blend Face Mask"><h3>Face Mask</h3><img src="../images/./face-mask.jpg" alt="Face Mask image"><p class="price">$5.00<button value="face-mask">Add</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const stepOne = renderClothes(faceMask);
    const actual = stepOne.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(actual, expected);
});
