// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    newArr = [...this] //make a copy of the original array
    for (let i = 0; i < this.length; i++) {
      if (newArr[i] === undefined) continue;
      newArr[i] = callbackFn(this[i], i, this); //apply the call back function on the element and replacee the element with the return value
    }
    return newArr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this)) return true; // return true if at least one of the call backs return true
  }
  return false; // otherwise return false
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
    let result = initialValue !== undefined ? initialValue: this[0]; // initialize to initial value if specificed, otherwise use first value of array
    for (let i = initialValue !== undefined ? 0: 1; i < this.length; i++) { // start at 0 if initia value is specified, otherwise start at 1
        if (this[i] === undefined) continue;
        result = callbackFn(result, this[i], i, this)
    }
    return result; // otherwise return false
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    for (let i = fromIndex !== undefined? Math.max(fromIndex, 0): 0; i < this.length; i++) { // start from a specified index if specified, otherwise 0
        //if (this[i] === undefined) continue;
        if (this[i] === searchElement) return true; // return true if at least one of the elements equals to the value
        if (isNaN(this[i] && isNaN(searchElement))) return true; // return true if both the search element and the element is NaN
      }
    return false; // otherwise return false
};

// INDEXOF //
Array.prototype.myIndexOf = function() {
  // Place your code here.
};

// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
  let args_index = 0;  // Index of new element
  let length = this.length;   // Length of "this" array
  // The last element of "this" array is at length - 1
  for (let i = length; i < length + args.length; i++) {
      this[i] = args[args_index];  // Add new element to end of "this" array
      args_index++;
  }
  return this.length;  // Return new length of "this" array
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {
  // Place your code here.
};

// KEYS //
Object.myKeys = function() {
  // Place your code here.
};

// VALUES //
Object.myValues = function() {
  // Place your code here.
};