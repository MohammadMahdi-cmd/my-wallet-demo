document.getElementById("login-btn").addEventListener('click',
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value
        const pin = document.getElementById("PIN").value
        if(accountNumber.length === 11){
            if(pin.length === 4){
                window.location.href = "../HTML/main.html"
            }
            else{
                console.log("invalid PIN number")
            }
        }
        else{
            console.log("invalid account number")
        }
    }
)