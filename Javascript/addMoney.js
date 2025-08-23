// Add Money Feature 
const validPin = 2211;
document.getElementById('add-Money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = parseInt(document.getElementById('pin-number').value)

    const totalAmount = parseInt(document.getElementById('totalAmount').innerText)
    if(accountNumber.length < 11 ){
        alert('Please Fill Up The Account Number To 11 Digit.')
        return;
    }
    else if(pinNumber !== validPin ){
        alert('Please Fill Up The Pin Number To 4 Digit.')
        return;
    }
    const totalNewAmount = addAmount + totalAmount;
    document.getElementById('totalAmount').innerText = totalNewAmount
})
// Cash Out Feature 
document.getElementById('cashOut-btn').addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = document.getElementById('agent-number').value;
    const addAmountCash = parseInt(document.getElementById('add-amount-cash').value);
    const pinNumber = parseInt(document.getElementById('pin-number-cash').value);

    const totalAmount = parseInt(document.getElementById('totalAmount').innerText)
    if(agentNumber.length < 11 ){
        alert('Please Fill Up The Agent Number To 11 Digit.')
        return;
    }
    else if(pinNumber !== validPin ){
        alert('Please Fill Up The Pin Number To 4 Digit.')
        return;
    }
    const totalNewAmount = totalAmount - addAmountCash ;
    document.getElementById('totalAmount').innerText = totalNewAmount;
})

// toggling feature 
document.getElementById('addMoney').addEventListener('click',function(){
    document.getElementById('cashOut-money').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';

})

document.getElementById('cashOut').addEventListener('click',function(){
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cashOut-money').style.display = 'block';

})
