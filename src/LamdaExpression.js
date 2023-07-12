//#region without parameters
//normal function without parameters
const sayHello = function(){
    console.log('Hello');
}


//lamda functions without parameters
const sayHello2 = () => console.log('Hello');
console.log(sayHello2());
//#endregion

//#region  with parameters
//normal function with parameter
const square = function(number){
    return number * number;
}

//lamda functions with parameter
const square2 = number => number * number;
console.log(square2(5));
//#endregion

//#region with multiple parameters
//normal function with multiple parameters
const addNum = function(number1, number2){
    return number1 + number2;
}

//lamda function with multiple parameters
const addNum2 = (number1, number2) => number1 + number2;
console.log(addNum2(5, 10));
//#endregion 

const cricketPlayers = [
    {name: 'Sachin', age: 45},
    {name: 'Kohli', age: 30},
    {name: 'Dhoni', age: 38}
];

const under30 = cricketPlayers.filter(function(cricketPlayer){ return cricketPlayer.age < 30; });
const under30_2 = cricketPlayers.filter(cricketPlayer => cricketPlayer.age < 30);