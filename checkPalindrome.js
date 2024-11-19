    let str = s.replaceAll(/[^a-z0-9]/gmi, '')
    if(str.toLowerCase().split("").reverse().join("") == str.toLowerCase()) {
        return true;
    }
    return false
