document.getElementById("cashout-section").style.display = "none";
document.getElementById("add-money-section").style.display = "block";

document.getElementById('add-money-box').addEventListener("click", function() {
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "block";
});

document.getElementById('cashout-box').addEventListener("click", function() {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block";
});
