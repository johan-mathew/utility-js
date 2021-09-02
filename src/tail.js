const tail = (array) => {
    if (array.length >= 1)
        array.shift();
    if (array.length == 0)
        return undefined;
    return array;   
}
module.exports = tail;
