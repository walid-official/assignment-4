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
console.log(waitingTime([7, 8, 3, 4, 5], "9"));


// amder ke je input example hishabe dawa hoyache shegula check kore jodi output thik thake tahole ki ami make sure korte parbo je amer code thik ache?
// problem-4 ar vitor testScore : 50 ba 50 ar niche hote hobe; ar schoolgrade : 30 ar kom hote hobe; agula ki validation korte hobe..mane jodi kew 50 ar beshi dai testScore and schoolgrade 30 ar beshi dai