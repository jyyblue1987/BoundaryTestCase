// first digit after the decimal point, i.e., 90.5, or 89.4
Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

exports.convert = function (score) {
    if( !score )    // check empty object
        return 'Undefined Object';

    if( Array.isArray(score) == false ) // check array object
        return 'Argument is not array';

    if( score.length < 4 )  // check object contain four values
        return 'Argument is smaller than 4';

    for(var i = 0; i < score.length; i++ )  // check value range
    {
        if( score[i] < 0 || score[i] > 100 )
            return 'Overflow';
    }

    var grade = 0.1 * score[0] + 0.1 * score[1] + 0.4 * score[2] + 0.4 * score[3];

    grade = grade.toFixedDown(1);

    grade = grade.toFixed(0);

    if( grade >= 93 )
        return 'A';

    if( grade >= 90 )
        return 'A-';

    if( grade >= 87 )
        return 'B+';

    if( grade >= 83 )
        return 'B';

    if( grade >= 80 )
        return 'B-';

    if( grade >= 77 )
        return 'C+';

    if( grade >= 73 )
        return 'C';

    if( grade >= 70 )
        return 'C-';

    if( grade >= 67 )
        return 'D+';

    if( grade >= 63 )
        return 'D';

    if( grade >= 60 )
        return 'D-';

    return 'F';
}