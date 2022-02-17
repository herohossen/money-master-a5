function getExpenses()
{
   // const incomeInput= document.getElementById('income-input').value;
    // const incomeValue 
    // console.log(incomeInput);
     const foodInput= document.getElementById('food-input').value;
   //  console.log(foodInput);
     const rentInput= document.getElementById('rent-input').value;
   //  console.log(rentInput);
     const clothesInput= document.getElementById('clothes-input').value;
    // console.log(clothesInput);
     const totalExpensesSum = parseFloat(rentInput)+parseFloat(foodInput)+parseFloat(clothesInput);
    // console.log(totalExpensesSum);
     return totalExpensesSum;
}

function getBalance(){

    const getBalance=document.getElementById('income-input').value;
    const getTotalBalance=parseFloat(getBalance);
    return getTotalBalance;

}

function getSaveAmount(income,percentage){

  const getSaveAmount = (parseFloat(income)*parseFloat(percentage))/100;
  return getSaveAmount;

}

function getRemainingAmount(totalBalance,saveAmount){

  const getRemainingAmount = parseFloat(totalBalance)-parseFloat(saveAmount);
  return getRemainingAmount;

}

function validationRule1(totalExpense,getIncome){
  return parseFloat(totalExpense) > getIncome ? true : false;
}

function validationRule2(savingAmount,remainingAmount){
  return savingAmount > remainingAmount ? true : false;
}


document.getElementById("calculate-button").addEventListener
("click",function(){
//Calculate Total Expenses

const totalExpense = getExpenses();
const balance=getBalance();
const isValidationFailed = validationRule1(totalExpense,balance);

if(isValidationFailed){
  alert('error message');
  return false;
}
const totalExpenses=document.getElementById('total-expenses');
totalExpenses.innerText = totalExpense;

//Total Balance

const currentBalance= getExpenses();
const totalBalance=document.getElementById('total-balance');
totalBalance.innerText=balance-currentBalance;
});

document.getElementById("amount-save-button").addEventListener
("click",function(){
//Calculate Total Expenses

const getIncomeBalance = document.getElementById('income-input').value;
const savingPercentage = document.getElementById('amount-input').value;
const totalBalance = document.getElementById('total-balance').innerHTML;


const saveAmount = getSaveAmount(getIncomeBalance,savingPercentage);
const remainingAmount = getRemainingAmount(totalBalance,saveAmount);

const isValidationFailed = validationRule2(saveAmount,remainingAmount);
if(isValidationFailed){
  alert('error message2');
  return false;
}
document.getElementById('saving-amount').innerText=saveAmount;
document.getElementById('remaining-balance').innerText=remainingAmount;


});