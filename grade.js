Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

exports.convert = function (score) {
    var grade = 0.1 * score[0] + 0.1 * score[1] + 0.4 * score[2] + 0.4 * score[3];
    grade = grade.toFixedDown(1);

    return grade;
}