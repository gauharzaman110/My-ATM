import inquirer from "inquirer";

interface ansType{
    userId: string,
    userpin: number,
    accountType: string,
    transactionType: string,
    amount: number
}

const answer: ansType = await inquirer.prompt([
    {
        type : "input",
        name: "userId",
        message: "Kindly Enter you Id"
    },
    {
        type : "number",
        name: "userpin",
        message: "Kindly Enter you Pin"
    },
    {
        type : "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type "
    },
    {
        type : "list",
        name: "TransactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answer){
            return answer.accountType
        }
    },
    {
        type : "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answer){
            return answer.TransactionType == "Fast Cash"
        }
    },
    {
        type : "number",
        name: "amount",
        message: "Enter your amount",
        when(answer){
            return answer.TransactionType == "Withdraw"
        }
    },
])

if(answer.userId && answer.userpin){
    const balance = Math.floor(Math.random()*100000);
    console.log(balance);
    const enteredAmount = answer.amount;
    if(balance >= enteredAmount){
    const remaining = balance - enteredAmount
    console.log("Your remaining balance is , " , remaining)
    }else{
        console.log("Insufficient Balance")
    }
}