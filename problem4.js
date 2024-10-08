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
    if(typeof obj !== "object" || Array.isArray(obj)){
        return "Invalid Input";
    }
    if(obj.testScore > 50 || obj.schoolGrade > 30){
        return "Invalid Input";
    }
    let scoreStudent = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        scoreStudent += 20;
    }
    return scoreStudent >= 80 ? true : false;
   
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));