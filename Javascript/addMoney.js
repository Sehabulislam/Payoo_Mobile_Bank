const validPin = 2211;
const transactionData = []
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

// Add Money Feature 
document.getElementById('add-Money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = getInputValue('bank');
    const accountNumber = getInputValue('account-number')
    const addAmount = getInputValueNumber('add-amount')
    const pinNumber = getInputValueNumber('pin-number');

    const totalAmount = getInnerText('totalAmount')
     if(addAmount <= 0 ){
        alert('Invalid Amount')
        return;
     }
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
    const data = {
        name : 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)

})
// Cash Out Feature 
document.getElementById('cashOut-btn').addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = getInputValue('agent-number');
    const addAmountCash = getInputValueNumber('add-amount-cash');
    const pinNumber = getInputValueNumber('pin-number-cash');

    const totalAmount = getInnerText('totalAmount');
    if(addAmountCash <= 0 || addAmountCash > totalAmount){
        alert('Invalid Amount.')
        return;
    }
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

     const data = {
        name : 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)

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
      const data = {
        name : 'Transfer Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)

})
//Pay Bill
document.getElementById("pay-money-btn").addEventListener('click', function(e){
    e.preventDefault()
    const billerNumber = getInputValue("biller-account-number");
    const payAmount = getInputValueNumber("Add Amount to pay");
    const pinNumber = getInputValueNumber("pin-number");
    
    const totalAmount = getInnerText('totalAmount');
    //biller-account-number and pin check
    if(billerNumber.length !== 11 ){
        alert('Please Fill Up The User Number To 11 Digit.')
        return;
    }
    else if(pinNumber !== validPin ){
        alert('Invalid Pin Number. Please Try Again')
        return;
    }
    const totalNewAmount = totalAmount - payAmount ;
     document.getElementById('totalAmount').innerText = totalNewAmount;
      const data = {
        name : 'Pay Bill',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)

})
// transaction
document.getElementById('tran-saction').addEventListener('click',function(){
    const transectionContainer = document.getElementById('transaction-container')
    transectionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement('div')
            div.innerHTML =`
             <div class="bg-[#f4f5f7] rounded-xl p-3 max-w-lg mt-3 m-auto flex justify-between items-center">
             <div class="flex items-center">
                 <div class=" p-3 rounded-full bg-[#f4f5f7]">
                 <img src="assets/wallet1.png" alt="">
            </div>
             <div class="ml-3">
                 <h1>${data.name}</h1>
                <p>${data.date}</p>
            </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
            `
        transectionContainer.appendChild(div)
    }
})


// toggling feature 
function handleToggle(id){
   const forms = document.getElementsByClassName('form');
     for(const form of forms){
    form.style.display = 'none';
   }
   document.getElementById(id).style.display = 'block'
}

//function to toggle buttons
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")

    
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")


    }

document.getElementById(id).classList.remove("border-gray-200")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}


// addMoney
document.getElementById('addMoney').addEventListener('click',function(){  
           handleToggle("add-money")
          handleButtonToggle("addMoney")
       })
//cashOut 
document.getElementById('cashOut').addEventListener('click',function(){
   handleToggle('cashOut-money')
     handleButtonToggle("cashOut")
}) 

//transferMoney
document.getElementById('transferMoney').addEventListener('click',function(){
   handleToggle('transfer-money')
    handleButtonToggle('transferMoney')
})

// get bonus
document.getElementById('get-your-bonus').addEventListener('click',function(){
    handleToggle('bonus-money')
     handleButtonToggle('get-your-bonus')
})

// payMoney 
document.getElementById('pay-money').addEventListener('click',function(){
   handleToggle('pay-bill')
    handleButtonToggle('pay-money')
})
// transaction
document.getElementById('tran-saction').addEventListener('click',function(){
   handleToggle('transaction-container')
    handleButtonToggle('tran-saction')
})

