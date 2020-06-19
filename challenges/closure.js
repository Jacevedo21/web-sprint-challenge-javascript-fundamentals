// // ==== Closures ==== 

// /* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();

// // Explanation: 
// // it can access internal beacause a you can access variables outside of the function, however you can't access a variable inside the function from the outside.

// /* Task 2: Counter */

// /* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(item){
  // populate an epmty array from 1 to item
  // use the .reduce method to reduce that populated array
  let newArr = [];
  for(let i = 1; i <= item; i++){
      newArr.push(i)
  }
  return newArr.reduce((accumulator, value) => accumulator + value)
}

console.log('count -->', summation(4))
