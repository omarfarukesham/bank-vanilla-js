document.getElementById('deposite-btn').addEventListener('click', function(){
    // deposite update code here 
    const getInputAmount = document.getElementById('deposite-input')
    const getInputAmountValue    = getInputAmount.value
    const getDepositeId = document.getElementById('deposite')
    const prevDepositeAmount = getDepositeId.innerText
    const newDepositConvert = parseFloat(prevDepositeAmount) + parseFloat(getInputAmountValue) 
          getDepositeId.innerText = newDepositConvert

    //balance update code here 
    const getBalanceAmout = document.getElementById('balance')
    const getBalanceValue = getBalanceAmout.innerText;
    const upDateBalance = parseFloat(getBalanceValue) + parseFloat(getInputAmountValue)
    getBalanceAmout.innerText = upDateBalance;

        getInputAmount.value = ''
   
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    //withdraw counting code here
    const withdrawAmouunt = document.getElementById('withdraw-input')
        const totalWithdrawAmount = withdrawAmouunt.value
        const getWithdrawAmount = document.getElementById('withdraw')
        const getPrevWithdrowId = getWithdrawAmount.innerText
        const updateWithdrawValue = parseFloat(getPrevWithdrowId) + parseFloat(totalWithdrawAmount)
             getWithdrawAmount.innerText = updateWithdrawValue;


    // balace update code here after withdraw 
    const getBalanceAmout = document.getElementById('balance')
    const getBalanceValue = getBalanceAmout.innerText;
    const upDateBalance = parseFloat(getBalanceValue) - parseFloat(totalWithdrawAmount)
    getBalanceAmout.innerText = upDateBalance;
             withdrawAmouunt.value = " "
})