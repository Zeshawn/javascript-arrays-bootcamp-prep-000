var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 function addElementToBeginningOfArray(array, element){
   return [...element, array];
 }
 
 function destructivelyAddElementToBeginningOfArray(array, elem){
   return array.unshift(elem)
 }
 
 function accessElementInArray(array,index){
   return array[index];
 }