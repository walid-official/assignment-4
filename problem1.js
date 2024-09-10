function calculateTax(income,expenses){
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    if(income >= expenses){
        let extract = income - expenses;
        let tax = extract * 20/100;
        return tax;
    }
}
console.log(calculateTax(10000, 3000));