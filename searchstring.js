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