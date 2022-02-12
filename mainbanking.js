//make function for code optimization and mor dynamic
function inputAmountCount(inputId){
//value from deposite input field
    const   getInputAmount = document.getElementById(inputId)
            getInputValue = getInputAmount.value
    const   parseInputAmount = parseFloat(getInputValue)

     //clear field value after click btn
            getInputAmount.value = ''
            return parseInputAmount
}

//this function for innerText value input and count
function fieldTextCount(inputId, amout){
    const getFieldAmount = document.getElementById(inputId)
          getFieldText = getFieldAmount.innerText
    const parseFieldText = parseFloat(getFieldText)

  return  getFieldAmount.innerText = parseFieldText + amout

}

//deposite count addevenHandler code gose here
document.getElementById('deposite-btn').addEventListener('click', function(){
    
        const parseInputAmount = inputAmountCount('deposite-input')
        if(parseInputAmount > 0){
            fieldTextCount('deposite', parseInputAmount)
            fieldTextCount('balance', parseInputAmount)
        }
            
})

// withdraw btn addEvenHandler code here
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //get input value after clicking the withdraw btn
    const parseInputAmount = inputAmountCount('withdraw-input')
    const prevBalance = +document.getElementById('balance').innerText

    if(prevBalance < parseInputAmount){
        alert('you cannot withdraw more than total balance')
        return;
    }

    if(parseInputAmount >0){
        fieldTextCount('withdraw', parseInputAmount)
        fieldTextCount('balance', -parseInputAmount)
    }
            
    
})