// validation start
function isNotNumber(number){
  return isNaN(number);
}

function isInputEmpty(inputField){
  return inputField == '' || inputField == null;
}

function isGreater(param1,param2){
  return parseFloat(param1) > parseFloat(param2) ? true : false;
}
// Validation End


function totalExpenses(foodInput,rentInput,clothesInput)
{
     const totalExpensesSum = parseFloat(rentInput)+parseFloat(foodInput)+parseFloat(clothesInput);
     return totalExpensesSum;
}

function getBalance(income,expense){

    const getTotalBalance=parseFloat(income) - parseFloat(expense);
    return getTotalBalance;

}
//Get Save Amount
function getSaveAmount(income,percentage){
  const getSaveAmount = (parseFloat(income)*parseFloat(percentage))/100;
  return getSaveAmount;

}

function getRemainingAmount(totalBalance,saveAmount){

  const getRemainingAmount = parseFloat(totalBalance)-parseFloat(saveAmount);
  return getRemainingAmount;

}


// Validation funtion End 

document.getElementById("calculate-button").addEventListener
("click",function(){

  const incomeInput= document.getElementById('income-input').value;

  const foodInput= document.getElementById('food-input').value;
  
  const rentInput= document.getElementById('rent-input').value;
  
  const clothesInput= document.getElementById('clothes-input').value;

  if(isNotNumber(incomeInput) || isInputEmpty(incomeInput)){
    alert('Please Enter A Non Empty Number In Income Field');
    return false;
  }

  if(isNotNumber(foodInput) || isInputEmpty(foodInput)){
    alert('Please Enter A Non Empty Number In Food Field');
    return false;
  }

  if(isNotNumber(rentInput) || isInputEmpty(rentInput)){
    alert('Please Enter A Non Empty Number In Rent Field');
    return false;
  }

  if(isNotNumber(clothesInput) || isInputEmpty(clothesInput)){
    alert('Please Enter A Non Empty Number In Clothes Field');
    return false;
  }

  const expense = totalExpenses(foodInput,rentInput,clothesInput);
  if(isGreater(expense,incomeInput)){
    alert('Total Expense is Greater Than Income');
    return false;
  }
  const balance = getBalance(incomeInput,expense);
  document.getElementById('total-expenses').innerText=expense;
  document.getElementById('total-balance').innerText=balance;


});

document.getElementById("amount-save-button").addEventListener
("click",function(){
//Calculate Total Expenses

const getIncomeBalance = document.getElementById('income-input').value;
const savingPercentage = document.getElementById('amount-input').value;
const totalBalance = document.getElementById('total-balance').innerHTML;


const saveAmount = getSaveAmount(getIncomeBalance,savingPercentage);
const remainingAmount = getRemainingAmount(totalBalance,saveAmount);

if(isGreater(saveAmount,remainingAmount)){
  alert('Savings Cant Be Greater Than Remaining Balance');
  return false;
}
document.getElementById('saving-amount').innerText=saveAmount;
document.getElementById('remaining-balance').innerText=remainingAmount;


});