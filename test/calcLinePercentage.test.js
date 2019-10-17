// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { calcLinePercentage } from '../src/utils.js';

const test = QUnit.test;

test('returns percentage', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const percent = '50%';
    //Act 
    // Call the function you're testing and set the result to a const
    let answer = calcLinePercentage(10, 5); 
        
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(percent, answer);
});
