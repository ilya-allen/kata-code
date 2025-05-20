var calPoints = function(operations) {
    let stack = [];
    let count = 0;
    for(const op of operations) {
        if(op == 'C') {
            stack.pop()
        } else if(op == 'D') {
            stack.push(stack[stack.length - 1] * 2)
        } else if (op == '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else {
            stack.push(Number(op))
        }
    }
    for(const stck of stack) {
        count += stck
    }
    return count
};
