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

