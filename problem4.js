// function calculateFinalScore(obj){
//     if(typeof obj !== "object"){
//         return "Invalid Input";
//     }
//     let scoreStudent = obj.testScore + obj.schoolGrade;
//     let poorFamilyScore = 0;
//     if(obj.isFFamily){
//         poorFamilyScore = scoreStudent + 20;
//     }else{
//         if(scoreStudent <= 80){
//             return false;
//         }else if(scoreStudent >= 80){
//             return true;
//         }
//     }
//     if(poorFamilyScore >= 80){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(calculateFinalScore({ name: "Rajib", testScore: 35,  schoolGrade: 20, isFFamily : true }));
// console.log(calculateFinalScore("hello"));


// Modified Version

function calculateFinalScore(obj){
    if(typeof obj !== "object"){
        return "Invalid Input";
    }
    let scoreStudent = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        scoreStudent += 20;
    }
    return scoreStudent >= 80 ? true : false;
   
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 35,  schoolGrade: 20, isFFamily : true }));
console.log(calculateFinalScore("hello"));
