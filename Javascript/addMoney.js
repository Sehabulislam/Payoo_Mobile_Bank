//function to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);

    return inputFieldValueNumber;
}

function  getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}
//function to get innerText
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}
const validPin = 2211;
//function to toggle
function handleToggle(id){
   const forms = document.getElementsByClassName('form');
     for(const form of forms){
    form.style.display = 'none';
   }
   document.getElementById(id).style.display = 'block'
}

// Add Money Feature 
document.getElementById('add-Money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = getInputValue('bank');
    const accountNumber = getInputValue('account-number')
    const addAmount = getInputValueNumber('add-amount')
    const pinNumber = getInputValueNumber('pin-number');

    const totalAmount = getInnerText('totalAmount')
    //account-number and pin check
    if(accountNumber.length !== 11){
        alert('Please Fill Up The Account Number To 11 Digit.')
        return;
    }
    else if(pinNumber !== validPin ){
        alert('Invalid Pin Number. Please Try Again')
        return;
    }
    const totalNewAmount = addAmount + totalAmount;
    document.getElementById('totalAmount').innerText = totalNewAmount
})
// Cash Out Feature 
document.getElementById('cashOut-btn').addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = getInputValue('agent-number');
    const addAmountCash = getInputValueNumber('add-amount-cash');
    const pinNumber = getInputValueNumber('pin-number-cash');

    const totalAmount = getInnerText('totalAmount');
    // mobile-number and pin check
    if(agentNumber.length !== 11 ){
        alert('Please Fill Up The Agent Number To 11 Digit.')
        return;
    }
    else if(pinNumber !== validPin ){
        alert('Invalid Pin Number. Please Try Again')
        return;
    }
    const totalNewAmount = totalAmount - addAmountCash ;
    document.getElementById('totalAmount').innerText = totalNewAmount;
})
//transfer money
document.getElementById("send-btn").addEventListener('click', function(e){
    e.preventDefault()
    const userNumber = getInputValue("user-number");
    const transferAmount = getInputValueNumber("transfer-amount");
    const pinNumber = getInputValueNumber("pinNumber");
    
    const totalAmount = getInnerText('totalAmount');
    //user-account-number and pin check
    if(userNumber.length !== 11 ){
        alert('Please Fill Up The User Number To 11 Digit.')
        return;
    }
    else if(pinNumber !== validPin ){
        alert('Invalid Pin Number. Please Try Again')
        return;
    }
    const totalNewAmount = totalAmount - transferAmount ;
     document.getElementById('totalAmount').innerText = totalNewAmount;
})

// toggling feature 

// addMoney 
document.getElementById('addMoney').addEventListener('click',function(){
        handleToggle("add-money")
})

//cashOut 
document.getElementById('cashOut').addEventListener('click',function(){
   handleToggle('cashOut-money')
}) 

//transferMoney
document.getElementById('transferMoney').addEventListener('click',function(){
   handleToggle('transfer-money')
})

// get bonus
document.getElementById('get-your-bonus').addEventListener('click',function(){
    handleToggle('bonus-money')
})

// payMoney 
document.getElementById('pay-money').addEventListener('click',function(){
   handleToggle('pay-bill')
})

