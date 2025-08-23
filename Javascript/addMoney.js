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