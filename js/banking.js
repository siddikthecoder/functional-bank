function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
   // get deposit input
   const depositAmount = getInputValue('deposit-input');

   if(depositAmount > 0){
       // get and update deposit total
       updateTotalField('deposit-total', depositAmount);
       // get and update balance
       updateBalance(depositAmount, true);
   }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get withdraw input
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        // get and update withdraw total
        updateTotalField('withdraw-total', withdrawAmount);
        // get and update balance
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('you can not withdraw more what you have in your account');
    }
});
