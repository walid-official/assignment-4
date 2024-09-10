// function checkDigitsInName(name){
// if(typeof name !== "string"){
//     return "Invalid Input";
// }
//   let numbers = [0,1,2,3,4,5,6,7,8,9];
//   for(const check of numbers){
//     let checkValid = name.includes(check);
//     return checkValid ? true : false;
//   }
// }
// console.log(checkDigitsInName("walid"));

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }


   for(let checking of name){
    if(!isNaN(checking)){
        return true;
    }
   }
    return false;
}

// Example usage
console.log(checkDigitsInName("walid123")); // Outputs: false
console.log(checkDigitsInName(["@#"])); // Outputs: true
