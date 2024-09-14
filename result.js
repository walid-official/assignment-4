function calculateTax(income,expenses){
    if(typeof income !== "number" || typeof expenses !== "number" || income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }else{
        if(income >= expenses){
            let extract = income - expenses;
            let tax = extract * 0.20;
            return tax;
        }
    }
   
}

function sendNotification(email){
    if(email.includes("@@")){
        return "Invalid Email"
    }else{
        if(email.includes("@")){
            let separateEmail = email.split("@"); 
            let  textNotification = separateEmail[0] + " sent you an email from " + separateEmail[1];
            return textNotification;
        }else{
            return "Invalid Email";
        }
    }
 }




 function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
   for(let checking of name){
    if(!isNaN(checking) && !isNaN("")){
        return true;
    }
   }
    return false;
}

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


function waitingTime(waitingTimes,serialNumber){
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    let sum = 0;
    for(const times of waitingTimes){
        sum += times;
    }
    let mySerial = serialNumber - 1;
    let serial = mySerial - waitingTimes.length;
    let storeAver = sum / waitingTimes.length;
    let rounded = Math.round(storeAver);
    let result =  rounded * serial;
    return result;
}