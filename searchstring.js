exports.searchString = function (length, source, query) {
    if(length < 1 || length > 20 )
        return "Length must be between 1 and 20";

    if( !source )
        return "Please input target string";

    if( source.length != length )
        return "String length does not matched";

    if( !query || query.length != 1 )
        return "Query Character must be length 1";

    for(var i = 0; i < source.length; i++ )
    {
        if(source[i] == query)
            return i;
    }

    return -1;
};


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// receive grade input for test
exports.receiveTestCase = function() {
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
            var ret = this.searchString(arr[0], arr[1], arr[2]);
            console.log(ret);
        }

        this.receiveTestCase();
    });
};

this.receiveTestCase();