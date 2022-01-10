var shoppingList = ['bread', 'milk', 'pizza'];
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

//pop push shift unshift
shoppingList.pop(); //removes last list object
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

shoppingList.push('oranges'); //pushes to end of list
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

shoppingList.shift(); //removes item from front of list
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

shoppingList.unshift('chicken'); //adds item to front of list
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);

var array1 = ['Coca-Cola', 'Dr. Pepper', 'Root Beer'];
var array2 = ['Sprite', 'Orange Soda', 'Grape Soda'];

//concat() joins 2 arrays together
var soda = array1.concat(array2);  //can use comma to concat more than 1 array

//reverse() changes order from back to front
var soda = soda.reverse();

//sort() sorts all items of an array
var alphaOrder = soda.sort(); //alphabetical

//slice() 
var sliceSoda = soda.slice(1, 4); //starts array at 1 (second entry) and ends at index 4 (5th element of array, but does not include in results)