//example:
let counter = 0;
function inception() {
    if (counter === 3) {
        return 'done';
    }
    //do not forget to write return instead of just calling inception().
    //otherwise once counter reaches 3, the function will return 
    //undefined instead of 'done'
    return inception(); //instead of just: inception();
}

/*
Steps:
1. Identify the base case
2. Identify the recursive case
3. Get close to the condition and once conditions are met, return.
Usually there are 2 return statements in a recursive function
*/

//Exercise: 2 functions to find factorial of a number. 

let answer;
//Recursive:
function findFactorialRecursive(number){
    //9*8*7*6*5*4*3*2*1
    //9*(9-1)
    //Base case: number = 1
    if (number === 1) {
        let temp = answer;
        answer = null;
        return temp;
    }

    if (!answer) {
        answer = number;
    }

    answer *= (number - 1);
    number -= 1;
    return findFactorialRecursive(number);

}

//Recursive better:
function findFactorialRecursive(number) {
    debugger;
    if (number === 2) {
        return 2;
    }
    return number * ( findFactorialRecursive(number - 1));
}


//Iterative:
function findFactorialIterative(number) {
    for (let i = number-1; i > 1; i--) {
        number *= i;
    }
    return number;
}





/**
 * Fibonacci Sequence: Given a number N return the index value
 * of the Fibonacci sequence, where the sequence is:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
 */

function fibonacciIterative(n) {
    
    if (n === 0) {
        return 0;
    }

    let prev = 0;
    let next = 1;
    let temp;
    
    let index = 1;
    while (next != n) {
        temp = prev;
        prev = next;
        next += temp;
        index++;
    }

    return index;

}

//This function will return the value at index n
//input: 3 output: 2 input: 6 output: 8
function fibonacciIterative(n) {

    if (n === 0) {
        return 0;
    }

    let prev = 0;
    let next = 1;
    let temp;
    debugger;
    for (let i = 2; i <= n; i++) {

        temp = prev;
        prev = next;
        next += temp;
    }

    return next;
}

//udemy solution
function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        let temp = arr[i-1] + arr[i-2];
        arr.push(temp);
    }
    return arr[n];
}

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}