
// commonfunction for deposite and withdraw input value.
function commonFunction(inputId){
    const getInputNumber = document.getElementById(inputId)
    const getInputValue  = getInputNumber.value
          getInputParseValue  = parseFloat(getInputValue)

        //input field clear code here
        getInputNumber.value = ''
        return getInputParseValue
}

//innerText VALUE AND BALANCE 
function commonInnerTextFunction(inputId, amount){
    const getFieldNumber = document.getElementById(inputId)
    //currentFunction()
    const getFieldValue = getFieldNumber.innerText
          getFieldParseValue = parseFloat(getFieldValue) 
          return  getFieldNumber.innerText = amount + getFieldParseValue
        
}




// Deposite action which will be add in deposite account and undate balance 
document.getElementById('deposite-btn').addEventListener('click', function(){

    //dynamic function called from above 
    const getInputParseValue = commonFunction('deposite-input')
    if(getInputParseValue > 0){
        commonInnerTextFunction('deposite', getInputParseValue )
        commonInnerTextFunction('balance', getInputParseValue )
     }


})

// withdraw action which will add the debet section and reduce will be at balance section
document.getElementById('withdraw-btn').addEventListener('click', function(){
  
 
    const getInputWithdrawParseValue = commonFunction('withdraw-input')
    const prevBalance = +document.getElementById('balance').innerText

    if(prevBalance < getInputWithdrawParseValue){
        alert('you cannot withdraw more than total balance')
        return;
    }
    // const currentValue = currentFunction()
    // console.log(currentValue)
   // &&  currentValue < getInputWithdrawParseValue

    if(getInputWithdrawParseValue > 0 ){
        commonInnerTextFunction('withdraw', getInputWithdrawParseValue)
        commonInnerTextFunction('balance', -getInputWithdrawParseValue)
    }
     
})

