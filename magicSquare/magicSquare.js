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

//Create a function that sums the elements of the secondary diagonal
function sum_secondary_diagonal(anArray) {
    var numbers = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( i + j === 2 ) {
                numbers.push(anArray[i][j]);
            }
        }
    }
    //This part of the function finds the position of 0
    var positionOfZeros = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( i + j === 2 && anArray[i][j] === 0 ) {
                positionOfZeros.push(i);
                positionOfZeros.push(j);
            }
        }
    }
    //Calculate the sum
    var sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    //Store the sum and the position of zeros
    var sumAndZeros = [sum, positionOfZeros];
    return sumAndZeros;
}

//Create a function that sums the elements of the main diagonal
function sum_main_diagonal(anArray) {
    var numbers = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( i === j ) {
                numbers.push(anArray[i][j]);
            }
        }
    }
    //This part of the function finds the position of 0
    var positionOfZeros = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if( i === j && anArray[i][j] === 0 ) {
                positionOfZeros.push(i);
                positionOfZeros.push(j);
            }
        }
    }
    //Calculate the sum
    var sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    //Store the sum and the position of zeros
    var sumAndZeros = [sum, positionOfZeros];
    return sumAndZeros;
}

//Create a function that sums the elements of the lines
function sum_lines(anArray) {
    var sumOfLines = [];
    for(let i = 0; i < 3; i++) {
        let line = anArray[i], sum = 0;
        for(let j = 0; j < 3; j++) {
            sum += line[j];
        }
        sumOfLines.push(sum);
    }
    //This part of the function finds the position of 0
    var positionOfZeros = [];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(anArray[i][j] === 0 ) {
                positionOfZeros.push(i);
                positionOfZeros.push(j);
            }
        }
    }
    //Store the sum and the position of zeros
    var sumAndZeros = [sumOfLines, positionOfZeros];
    return sumAndZeros;
}

//Create a function with calculates the total cost
function totalCosts(otherArray, anArrayMaster) {
    let anArrayMasterLength = anArrayMaster.length;
    let totalCosts = [];
    for(let i = 0; i < anArrayMasterLength; i++){
        for(let j = 0; j < 3; j++ ) {
            for(let k = 0; k < 3; k++) {
                totalCosts.push(otherArray[j][k] - anArrayMaster[i][j][k]);
            }
        }
    }
    return totalCosts;
}
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
    //this will return an array with four numbers:
    //[position i1, position j1, position i2, position j2]
    let eightPositions = whereShouldBeEights[1];
    let positionsLength = eightPositions.length;
    //Generating the squares
    for(let i = 0; i < 3 ; i += 2){
        //The first two elements will be the i and j position of 8
        //The second ones will be those of 6
        if(i === 0){
            //Create a new array square
            let newArray = template_array(); 
            //Place 9 where it should be in the new array
            newArray[positionOfNumber[0]][positionOfNumber[1]] = 9;
            //So, 8 , 6 and all the rest are determined
            newArray[eightPositions[i]][eightPositions[i + 1]] = 8;
            newArray[eightPositions[i + 2]][eightPositions[i + 3]] = 6;
            //Five must be at [1][1]
            newArray[1][1] = 5;
            //Put seven
            let whereShouldBeSevens = where_should_be_sevens(newArray, positionOfNumber[0], positionOfNumber[1], eightPositions[i], eightPositions[i + 1]);
            let positionOfSevens = whereShouldBeSevens[1];
            newArray[positionOfSevens[0]][positionOfSevens[1]] = 7;
            //Fill the secondary diagonal
            let dataOfSecondaryDiagonal = sum_secondary_diagonal(newArray);
            let sumOfSecondaryDiagonal = dataOfSecondaryDiagonal[0];
            let numberThatLasts = 15 - sumOfSecondaryDiagonal;
            //positionOfZeros: an array with two numbers
            let positionOfZeros = dataOfSecondaryDiagonal[1]; 
            //Find where there is 0 in the secondary diagonal
            newArray[positionOfZeros[0]][positionOfZeros[1]] = numberThatLasts;
            //Fill the main diagonal
            let dataOfMainDiagonal = sum_main_diagonal(newArray);
            let sumOfMainDiagonal = dataOfMainDiagonal[0];
            let lastNumber = 15 - sumOfMainDiagonal;
            //newPositionOfZeros: an array with two numbers
            let newPositionOfZeros = dataOfMainDiagonal[1]; 
            //Find where there is 0 in the secondary diagonal
            newArray[newPositionOfZeros[0]][newPositionOfZeros[1]] = lastNumber;
            //Dealing with the lines
            let lineData = sum_lines(newArray);
            let lineSums = lineData[0];
            let lastNumbers = [];
            for(let l = 0; l < 3; l++) {
                if(lineSums[l] != 15) {
                    lastNumbers.push(15 - lineSums[l]);
                }
            }
            let zerosInLines = lineData[1];
            
            //The first zero
            newArray[zerosInLines[0]][zerosInLines[1]] = lastNumbers[0];
            //The second zero
            newArray[zerosInLines[2]][zerosInLines[3]] = lastNumbers[1];
            //Add the array in the master Array
            masterArray.push(newArray);
        } else {
            //Create a new array square
            let newArray = template_array();
            //Place 9 where it should be in the new array
            newArray[positionOfNumber[0]][positionOfNumber[1]] = 9;
            //So, 8 , 6 and all the rest are determined
            newArray[eightPositions[i]][eightPositions[i + 1]] = 8;
            newArray[eightPositions[i - 2]][eightPositions[i - 1]] = 6;
            //Five must be at [1][1]
            newArray[1][1] = 5;
            //Put seven
            let whereShouldBeSevens = where_should_be_sevens(newArray, positionOfNumber[0], positionOfNumber[1], eightPositions[i], eightPositions[i + 1]);
            let positionOfSevens = whereShouldBeSevens[1];
            newArray[positionOfSevens[0]][positionOfSevens[1]] = 7;
            //Fill the secondary diagonal
            let dataOfSecondaryDiagonal = sum_secondary_diagonal(newArray);
            let sumOfSecondaryDiagonal = dataOfSecondaryDiagonal[0];
            let numberThatLasts = 15 - sumOfSecondaryDiagonal;
            //positionOfZeros: an array with two numbers
            let positionOfZeros = dataOfSecondaryDiagonal[1]; 
            //Find where there is 0 in the secondary diagonal
            newArray[positionOfZeros[0]][positionOfZeros[1]] = numberThatLasts;
            //Fill the main diagonal
            let dataOfMainDiagonal = sum_main_diagonal(newArray);
            let sumOfMainDiagonal = dataOfMainDiagonal[0];
            let lastNumber = 15 - sumOfMainDiagonal;
            //newPositionOfZeros: an array with two numbers
            let newPositionOfZeros = dataOfMainDiagonal[1]; 
            //Find where there is 0 in the secondary diagonal
            newArray[newPositionOfZeros[0]][newPositionOfZeros[1]] = lastNumber;
            //Dealing with the lines
            let lineData = sum_lines(newArray);
            let lineSums = lineData[0];
            let lastNumbers = [];
            for(let l = 0; l < 3; l++) {
                if(lineSums[l] != 15) {
                    lastNumbers.push(15 - lineSums[l]);
                }
            }
            let zerosInLines = lineData[1];
            
            //The first zero
            newArray[zerosInLines[0]][zerosInLines[1]] = lastNumbers[0];
            //The second zero
            newArray[zerosInLines[2]][zerosInLines[3]] = lastNumbers[1];
            //Add the array in the master Array
            masterArray.push(newArray);
        }
        
    }
    //Add this array into the master array

}

//Testing
console.log(masterArray);
console.log(totalCosts(s_definition(), masterArray));