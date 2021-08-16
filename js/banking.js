function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear deposit input field
    depositInput.value = '';
    return depositAmount;
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit input
    /*
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */
   const depositAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    // update total deposit
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // get current balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    // update balance
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    // update total withdraw
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 

    // get current balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    // update balance
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input field
    withdrawInput.value = '';
});
