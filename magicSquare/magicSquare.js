//Create an array which will contain all the magic squares
var masterArray = [];

//Define the original array
function s_definition(){
    let s = [
        [1, 2, 3],
        [6, 4, 8],
        [5, 7, 9]
    ];
    return s;
}

//Define an array template to be built
function template_array(){
    let s = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    return s;
}

//To be added later...  main(where_should_be_nines(s))
function mainFunction(otherFunction) {
    var numbers = [], positions = [];
    var numbersAndPositions = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( otherFunction === true ) {
                numbers.push(anArray[i][j]);
                positions.push(i); positions.push(j);
            }
        }
    }
    numbersAndPositions.push(numbers);
    numbersAndPositions.push(positions);
    return numbersAndPositions;
}

//Create a function that returns the array where should be nine
function where_should_be_nines(anArray) {
    var numbers = [], positions = [];
    var numbersAndPositions = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( Math.abs(i - j) === 1 ) {
                numbers.push(anArray[i][j]);
                positions.push(i); positions.push(j);
            }
        }
    }
    numbersAndPositions.push(numbers);
    numbersAndPositions.push(positions);
    return numbersAndPositions;
}

//Create a function that finds where should be eights
function where_should_be_eights(anArray, iPositionOfNine, jPositionOfNine) {
    var numbers = [], positions = [];
    var numbersAndPositions = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( ( Math.abs(i - j) === 0 || Math.abs(i - j) === 2) && ( (i !== iPositionOfNine) && (j !== jPositionOfNine) ) ) {
                numbers.push(anArray[i][j]);
                positions.push(i); positions.push(j);
            }
        }
    }
    numbersAndPositions.push(numbers);
    numbersAndPositions.push(positions);
    return numbersAndPositions;
}

//Create a function that finds where should be sevens
function where_should_be_sevens(
    anArray,
    iPositionOfNine,
    jPositionOfNine,
    iPositionOfEight,
    jPositionOfEight
    ) {
    var numbers = [], positions = [];
    var numbersAndPositions = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( ( (i !== iPositionOfNine) && (j !== jPositionOfNine) ) && ( (i !== iPositionOfEight) && (j !== jPositionOfEight) ) ) {
                numbers.push(anArray[i][j]);
                positions.push(i); positions.push(j);
            }
        }
    }
    numbersAndPositions.push(numbers);
    numbersAndPositions.push(positions);
    return numbersAndPositions;
}

//Create a function that finds where should be sixs
function where_should_be_sixs(anArray, iPositionOfNine, jPositionOfNine) {
    var numbers = [], positions = [];
    var numbersAndPositions = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( ( (i !== iPositionOfNine) && (j !== jPositionOfNine) ) && ( (Math.abs(i - j === 0)||(Math.abs(i - j === 2)) && (anArray[i][j] !== 8) ) ) ) {
                numbers.push(anArray[i][j]);
                positions.push(i); positions.push(j);
            }
        }
    }
    numbersAndPositions.push(numbers);
    numbersAndPositions.push(positions);
    return numbersAndPositions;
}

//console.log(where_should_be_nines(s_definition());

/*
Take the first number and its position 
of the array. And create a variable
containing the total cost
*/

//Store the information
var whereShouldBeNines = where_should_be_nines(template_array());
//Numbers
var numbers = whereShouldBeNines[0];
//Positions
var positions = whereShouldBeNines[1];
var positionsLength = positions.length;
//Generate the squares
for(let i = 0; i < positionsLength; i += 2) {
    /*
    Position of the number. "positions[i]" is the index of the row of 9 and "positions[i+1]"
    its column index number.
    */
    let positionOfNumber = [positions[i], positions[i + 1]];
    //Create a new array square
    let newArray = template_array(); 
    //Place 9 where it should be in the new array
    newArray[positionOfNumber[0]][positionOfNumber[1]] = 9;
    //Now we use the function that deals with the eights
    let whereShouldBeEights = where_should_be_eights(newArray, positionOfNumber[0], positionOfNumber[1]);
    //Testing
    //console.log(newArray);
    //console.log(whereShouldBeEights);
    //Deal with the positions of the eights
    let eightPositions = whereShouldBeEights[1];
    let positionsLength = eightPositions.length;
    //Adding the eights
    for(let j = 0; j < positionsLength; j += 2) {
        if(j === 0) {
            let positionOfNumber = [eightPositions[j], eightPositions[j + 1]];
            newArray[positionOfNumber[0]][positionOfNumber[1]] = 8 ;
        } else {
            let positionOfNumber = [eightPositions[j + 1], eightPositions[j]];
            newArray[positionOfNumber[0]][positionOfNumber[1]] = 6 ;
        }
        masterArray.push(newArray);
    }
    //Add this array into the master array

}
//Testing
console.log(masterArray);
