const reduce = (array,callback,accumulator = 0) => {
    n = 0;
    if(!accumulator && array.length == 0)
        return undefined;
    if(array.length == 0)
        return accumulator;
    if(typeof array[0] == "string" && accumulator == 0)
        accumulator = '';
    var accum_object = {};
    accum_object.number = accumulator;
    const _reduce = (array,callback,n,accum_object) => {
        if(n < array.length){
            accum_object.number = callback(accum_object.number,array[n]);
            _reduce(array,callback,n+1,accum_object);   
        }
    }
    _reduce(array,callback,n,accum_object);
    return accum_object.number;
}
module.exports = reduce;
