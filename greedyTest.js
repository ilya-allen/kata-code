var findContentChildren = function(g, s) {
    g.sort(function(a, b){return a-b});
    s.sort(function(a, b){return a-b});
    let i = 0; //iteratpr of kids greed
    let j = 0; //iterator of size of cookies

    while(i < g.length && j < s.length) {
        if(s[j] >= g[i]) {
            i++;
        }
        j++
    }

    return i;
};
