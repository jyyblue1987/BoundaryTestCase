module.exports.version = "1.0.1";

module.exports.searchString = function (input) {
    var arr = input.split(",");
    if( arr.length != 3 ) {
        return "Please input 3 parameters:\n" +
            "First: a positive integer in the range of 1 to 20\n" +
            "Second: a target string of characters of that length\n" +
            "Third: a single character\n" +
            "for eg, 5,woman,m";
    }

    var length = arr[0];
    var source = arr[1];
    var query = arr[2];

    if(length < 1 || length > 20 )
        return "Length must be between 1 and 20";

    if( !source )
        return "Please input target string";

    if( source.length < length )
        return "length should be less than input string's length";

    if( !query || query.length != 1 )
        return "Query Character must be length 1";

    for(var i = 0; i < length; i++ )
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
module.exports.receiveTestCase = function() {
    rl.question('Please input parameters ', (params) => {
        var ret = this.searchString(params);
        console.log(ret);

        this.receiveTestCase();
    });
};
