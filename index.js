var grade_func = require('./grade');
var score = [1, 2, 3, 4];

// generate test case
// boundary 0, 100
// individual value -1, 0, 1, 50, 99, 100, 101
// test value according to grade

// < 0 --   overflow
// 0, 59    F
// 60, 62   D-
// 63, 66   D
// 67, 69   D+
// 70, 72   C-
// 73, 76   C
// 77, 79   C+
// 80, 82   B-
// 83, 86   B
// 87, 89   B+
// 90, 92   A-
// 93, 100  A
// > 100    overflow

var test_cases = [];

// overflow test case
for(var i = 0; i < 4; i++ )
{
    var test = [0, 0, 0, 0, 'Overflow'];
    test[i] = -0.05;
    test_cases.push(test);
}

var test = [0, 0, 0, 0, 'F'];
test_cases.push(test);


console.log('Case: home1 home2 exam1 exam2 expected result correct');
for(var i = 0; i < test_cases.length; i++ )
{
    var score = test_cases[i];

    var grade = grade_func.convert(score);
    var flag = grade == score[4] ? "Yes" : "No";

    console.log((i + 1) + ': ' + score[0] + ", " + score[1] + ", " + score[2] + ", " + score[3] + ": " + score[4] +  " - " + grade + ": " + flag );
}

