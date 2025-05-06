document.getElementById("add-money-btn").addEventListener('click', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById("amount-add").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("PIN-add").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && pin) {
       if (convertedPin === 1234) {
            const sum = convertedAmount + convertedMainBalance;
            document.getElementById("main-balance").innerText = sum;
        } else {
            alert('Enter Valid PIN');
        }
    } else {
        alert('Amount and PIN are required.');
    }
});

