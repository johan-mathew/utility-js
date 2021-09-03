const map = (array,callback) => {
    n = 0;
    newArray = [];
    const _map = (array,callback,n,newArray) => {
        if(n < array.length){
                newArray.push(callback(array[n]));
            _map(array,callback,n+1,newArray);    
        }
    }
    _map(array,callback,n,newArray);
    return newArray;
}
module.exports = map;
