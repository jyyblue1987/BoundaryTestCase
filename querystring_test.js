// 1.	Write a Node.js program to implement the Grade Conversion Problem.
//      You need to specify a set of numbers as an object with four values for each element in the array.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var searchstring = require('./searchstring');

// receive grade input for test
function receiveTestCase() {
    rl.question('Please input parameters ', (answer) => {
        var arr = answer.split(",");
        if( arr.length != 3 ) {
            console.log("Please input 3 parameters:\n" +
                "First: a positive integer in the range of 1 to 20\n" +
                "Second: a target string of characters of that length\n" +
                "Third: a single character");
        }
        else
        {
            var ret = searchstring.searchString(arr[0], arr[1], arr[2]);
            console.log(ret);
        }

        receiveTestCase();
    });
}

receiveTestCase();







