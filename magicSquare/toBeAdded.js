//Testing
//console.log(firstNumber);

//Transform the first number into 9 and note the cost
totalCost += Math.abs(9 - firstNumber);
cost = Math.abs(9 - firstNumber);
firstNumber = 9;

//Testing
//console.log(s_definition());

//Create a new array square
let newS = s_definition(); 
//Place 9 where is the first number in s
newS[ positionOfFirst[0] ][ positionOfFirst[1] ] = firstNumber;

//Testing
//console.log(newS);

/*
Once 9 is determined, there are
2 possibilities for 8: at the two corners
where each of its positions coordinates
are different from those of 9. Take a look
at the where_should_be_eights() function
*/
//Take these two numbers and its positions
//console.log(where_should_be_eights(newS, positionOfFirst[0], positionOfFirst[1]));
var whereShouldBeEights = where_should_be_eights(newS, positionOfFirst[0], positionOfFirst[1]);
//Numbers
var numbers = whereShouldBeEights[0];
//Positions
var positions = whereShouldBeEights[1];
//First number
var firstNumber = numbers[0];
//Position of the first number
var positionOfFirst = [positions[0], positions[1]];
//Testing
//console.log(positions);
//Transform the first number into 8 and note the total cost
totalCost += Math.abs(8 - firstNumber);
firstNumber = 8;
//Place 8 where is the first number in s
newS[ positionOfFirst[0] ][ positionOfFirst[1] ] = firstNumber;
//Testing
//console.log(s_definition());
//console.log(newS);
//console.log(totalCost);
// Now 7 is uniquely determined
/*
console.log(
    where_should_be_sevens(
        newS,
        whereShouldBeNines[1][0],
        whereShouldBeNines[1][1],
        positionOfFirst[0],
        positionOfFirst[1]
    )
);
*/
//Store the data concerning 7
var whereShouldBeSevens = where_should_be_sevens(
    newS,
    whereShouldBeNines[1][0],
    whereShouldBeNines[1][1],
    positionOfFirst[0],
    positionOfFirst[1]
);
//Numbers
var numbers = whereShouldBeSevens[0];
//Positions
var positions = whereShouldBeSevens[1];
//First number
var firstNumber = numbers[0];
//Position of 7
var positionOfFirst = [positions[0], positions[1]];
//Transform the first number into 8 and note the total cost
totalCost += Math.abs(7 - firstNumber);
firstNumber = 7;
//Place 7 where is the first number in s
newS[ positionOfFirst[0] ][ positionOfFirst[1] ] = firstNumber;
/*Testing
console.log(s_definition());
console.log(newS);
console.log(totalCost);
*/
//console.log(newS);
//console.log(where_should_be_sixs(newS, whereShouldBeNines[1][0], whereShouldBeNines[1][1]));
//Store the data concerning 6
var whereShouldBeSixs = where_should_be_sixs(newS, whereShouldBeNines[1][0], whereShouldBeNines[1][1]);
//Numbers
var numbers = whereShouldBeSixs[0];
//Positions
var positions = whereShouldBeSixs[1];
//First number
var firstNumber = numbers[0];
//Position of 7
var positionOfFirst = [positions[0], positions[1]];
//Transform the first number into 6 and note the total cost
totalCost += Math.abs(6 - firstNumber);
firstNumber = 6;
//Place 6 where is the first number in s
newS[ positionOfFirst[0] ][ positionOfFirst[1] ] = firstNumber;
//console.log(s_definition())
//console.log(newS);
//console.log(totalCost);

/*
Now we can define an array whose elements are the positions which we cannot change. That is,
the positions of 9, 8, 7 and 6
*/
var sacredPositions = [
    [whereShouldBeNines[1][0], whereShouldBeNines[1][1]],
    [whereShouldBeEights[1][0], whereShouldBeEights[1][1]],
    [whereShouldBeSevens[1][0], whereShouldBeSevens[1][1]],
    [whereShouldBeSixs[1][0], whereShouldBeSixs[1][1]],
];
//console.log(newS);
//console.log(sacredPositions);
//5 will always be at the center, that is i = j = 1
totalCost += Math.abs(5 - s_definition()[1][1]);
newS[1][1] = 5
console.log(s_definition());
console.log(newS);
console.log(totalCost);