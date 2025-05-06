document.getElementById("cashout-btn").addEventListener('click', 
    function(event){
        event.preventDefault();
        const pin = document.getElementById("PIN-cashout").value;
        const convertedPin = parseInt(pin);
        const amount = document.getElementById("amount-cashout").value;
        const convertedAmount = parseFloat(amount);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        const accountNumber = document.getElementById("account-number-cashout").value;
        if(accountNumber.length !== 11){
            alert("Invalid Account Number")
        }
        else if (convertedPin !== 1234){
            alert("Enter Valid PIN")
        }
        else{
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        }
)