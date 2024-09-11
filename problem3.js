// function checkDigitsInName(name){
// if(typeof name !== "string"){
//     return "Invalid Input";
// }
//   let numbers = [0,1,2,3,4,5,6,7,8,9];
//   for(const check of name){
//     if(check === "0" || check === "1" || check === "2" || check ===  "3" ||  check === "4" || check ===  "5" || check ===  "6" || check ===  "7" || check ===  "8" || check ===  "9"){
//       return true;
//     }
//   }
//   return false;
// }

// function checkDigitsInName(name){
//   if(typeof name !== "string"){
//       return "Invalid Input";
//   }
//   let numbers = ["0","1","2","3","4","5","6","7","8","9"];
//   for(const digits of numbers){
//     if(name.includes(digits)){
//       return true;
//     }
//   }
//   return false;
//   }
  


function checkDigitsInName(name){
  if(typeof name !== "string"){
      return "Invalid Input";
  }
  let numbers = [0,1,2,3,4,5,6,7,8,9];
  for(const digits of numbers){
    if(name.includes(digits)){
      return true;
    }
  }
  return false;
  }



// console.log(checkDigitsInName("wali"));

// function checkDigitsInName(name) {
//     if (typeof name !== "string") {
//         return "Invalid Input";
//     }


//    for(let checking of name){
//     if(!isNaN(checking)){
//         return true;
//     }
//    }
//     return false;
// }

// Example usage

console.log(checkDigitsInName("walid"));

console.log(checkDigitsInName("walid500")); // Outputs: false
console.log(checkDigitsInName("wal5id")); // Outputs: false
console.log(checkDigitsInName(["@#"])); // Outputs: true