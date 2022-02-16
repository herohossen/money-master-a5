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




document.getElementById("calculate-button").addEventListener
("click",function(){

const totalExpenses=document.getElementById('total-expenses');
totalExpenses.innerText=getExpenses();

const balance=getBalance();
const currentBalance= getExpenses();
const totalBalance=document.getElementById('total-balance');
totalBalance.innerText=balance-currentBalance;
});