const max = (array) => {
   n = array.length-1;
   max_element = array[n];
   if ( n < 2)
    return array[0];
   const _max = (array,n,max_element) => {
       if(n == 0)
        return max_element;
       if(max_element < array[n-1])
         max_element =  array[n-1];
        return _max(array,n-1,max_element);
   }
   return _max(array,n,max_element); 
}
module.exports = max;
