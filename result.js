function calculateTax(income,expenses){
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    if(income >= expenses){
        let extract = income - expenses;
        let tax = extract * 0.20;
        return tax;
    }
}




function sendNotification(email){
    if(email.includes("@")){
        let separateEmail = email.split("@"); 
        let  textNotification = separateEmail[0] + " sent you an email from " + separateEmail[1];
        return textNotification;
    }else{
        return "Invalid Email";
    }
 }



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




function waitingTime(waitingTimes,serialNumber){
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    let mySerial = serialNumber - 1;
    let sum = 0;
    for(const times of waitingTimes){
        sum += times;
    }
    let serial = mySerial - waitingTimes.length;
    let storeAver = sum / waitingTimes.length;
    let rounded = Math.round(storeAver);
    return rounded * serial;
}