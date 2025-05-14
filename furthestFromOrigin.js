var furthestDistanceFromOrigin = function(moves) {
    let lCount = 0;
    let rCount = 0;
    for(const move of moves) {
        if (move == 'R') {
            rCount++;
        } else if (move == 'L') {
            lCount++;
        }
    }
    return Math.max(lCount, rCount) - Math.min(lCount, rCount) + (moves.length - lCount - rCount)
};
