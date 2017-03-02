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

function generateOverflowTestCase(start, end, label)
{
    var test_cases = [];

    // overflow test case for min
    for(var i = 0; i < 4; i++ )
    {
        var test = [start, start, start, start, label];
        test[i] = start - 0.05;
        test_cases.push(test);
    }

    // overflow test case for max
    for(var i = 0; i < 4; i++ )
    {
        var test = [end, end, end, end, label];
        test[i] = end + 0.05;
        test_cases.push(test);
    }

    return test_cases;
}

function generateTestCase(start, end, grade) {
    var test_cases = [];

    // test cases (boundary)
    var test = [start, start, start, start, grade];
    test_cases.push(test);

    // test cases (boundary)+
    for(var i = 0; i < 4; i++ )
    {
        var test = [start, start, start, start, grade];
        test[i] = start + 0.05;
        test_cases.push(test);
    }

    // test cases Normal
    var normal = (end + start) / 2;
    for(var i = 0; i < 1; i++ )
    {
        var test = [normal, normal, normal, normal, grade];
        test[i] = normal;
        test_cases.push(test);
    }

    // test cases (next boundary)-
    var boundary = end - 0.5;
    for(var i = 0; i < 4; i++ )
    {
        var test = [boundary, boundary, boundary, boundary, grade];
        test[i] = boundary - 0.01;
        test_cases.push(test);
    }

    if( end == 100 )
    {
        boundary = end;
        for(var i = 0; i < 4; i++ )
        {
            var test = [boundary, boundary, boundary, boundary, grade];
            test[i] = boundary - 0.01;
            test_cases.push(test);
        }

        var test = [boundary, boundary, boundary, boundary, grade];
        test_cases.push(test);
    }

    return test_cases;
}

var test_cases = [];

//var cases = generateOverflowTestCase(0, 100, 'Overflow');
//var cases = generateTestCase(0, 60, 'F');
//var cases = generateTestCase(60, 63, 'D-');
//var cases = generateTestCase(63, 67, 'D');
//var cases = generateTestCase(67, 70, 'D+');
//var cases = generateTestCase(70, 73, 'C-');
//var cases = generateTestCase(73, 77, 'C');
//var cases = generateTestCase(77, 80, 'C+');
//var cases = generateTestCase(80, 83, 'B-');
//var cases = generateTestCase(83, 87, 'B');
//var cases = generateTestCase(87, 90, 'B+');
//var cases = generateTestCase(90, 93, 'A-');
var cases = generateTestCase(93, 100, 'A');

test_cases = test_cases.concat(cases);

console.log('Case: home1 home2 exam1 exam2 expected result Passed');
for(var i = 0; i < test_cases.length; i++ )
{
    var score = test_cases[i];

    var grade = grade_func.convert(score);
    var flag = grade == score[4] ? "Yes" : "No";

    console.log((i + 1) + ':   ' + score[0] + ",   " + score[1] + ",   " + score[2] + ",   " + score[3] + ":   " + score[4] +  " - " + grade + ": " + flag );
}

