const filter = (array,callback) => {
    n = 0;
    newArray = [];
    const _filter = (array,callback,n,newArray) => {
        if(n < array.length){
            if(callback(array[n]))
                newArray.push(array[n]);
            _filter(array,callback,n+1,newArray);    
        }
    }
    _filter(array,callback,n,newArray);
    return newArray;
}
module.exports = filter;
