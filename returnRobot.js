/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let xCoord = 0;
    let yCoord = 0;
    for(const move of moves) {
        if(move == 'D') {
            yCoord -= 1;
        } else if (move == 'L') {
            xCoord -= 1;
        } else if (move == 'R') {
            xCoord += 1;
        } else if (move == 'U') {
            yCoord += 1;
        }
    }

    if(xCoord == 0 && yCoord == 0) {
        return true;
    } else {
        return false;
    }
};
