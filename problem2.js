// function sendNotification(email){
//    let separateEmail = email.split("@"); 
//    let  textNotification = separateEmail[0] + " sent you an email from " + separateEmail[1];
//    let checkValid = email.includes("@");
//    return checkValid ? textNotification : "Invalid Email";
   
// }
// console.log(sendNotification("zahidyahoo.com"));

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
 
 console.log(sendNotification("zahid@@yahoo.com"));
 console.log(sendNotification("farhan34@yahoo.com"));
 console.log(sendNotification("nadim.naem5@outlook.com"));
 console.log(sendNotification("zahidyahoo.com"));