// Select button for events
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');



// Get value from input value function
function getInputAmount(inputFiled) {

    const inputAmount = document.getElementById(inputFiled);
    const inputValue = parseFloat(inputAmount.value);
    inputAmount.value = '';
    return inputValue;
}
// update amount function
function updateAmount(amountFiled, amount) {
    const totalAmount = document.getElementById(amountFiled);
    const PrivousAmount = document.getElementById(amountFiled);
    const privousAmountValue = parseFloat(PrivousAmount.innerText);
    const updateTotalAmount = privousAmountValue + amount;
    totalAmount.innerText = updateTotalAmount;
    return updateTotalAmount;
}


//Update Total Balance
function updateBalaceFild(newBalance, isAdding) {
    const balanceFiled = document.getElementById("total-balance");
    const currentBalance = parseFloat(balanceFiled.innerText);
    let UpdateBalance;
    if (isAdding == true) {
        UpdateBalance = currentBalance + newBalance;
    } else {
        UpdateBalance = currentBalance - newBalance;
    }

    balanceFiled.innerText = UpdateBalance;
}
// Deposit Button Event
depositBtn.addEventListener('click', function () {

    const Depositamount = getInputAmount('deposit-input');

    if (Depositamount > 0) {
        //calling a function for Update deposit and withdraw amount
        updateAmount('deposit-total', Depositamount);
        //calling a funtion for Update Total Balance
        updateBalaceFild(Depositamount, true);
    }

});

// Withdraw Button Event
withdrawBtn.addEventListener('click', function () {

    const WithDrawamount = getInputAmount('witdraw-input');

    if (WithDrawamount > 0) {
        //calling a function for Update deposit and withdraw amount
        updateAmount('withdraw-toltal', WithDrawamount);
        //calling a funtion for Update Total Balance
        updateBalaceFild(WithDrawamount, false);
    }
});