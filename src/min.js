const min = (array) => {
    n = array.length-1;
    min_element = array[n];
    if ( n < 2)
     return array[0];
    const _min = (array,n,min_element) => {
        if(n == 0)
         return min_element;
        if(min_element > array[n-1])
          min_element =  array[n-1];
         return _min(array,n-1,min_element);
    }
    return _min(array,n,min_element); 
 }
 module.exports = min;
 