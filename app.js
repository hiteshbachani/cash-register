var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var msg = document.querySelector("#errorMessage");
var checkButton = document.querySelector(".check-button");
var numberOfNotes = document.querySelectorAll(".no-of-notes");

var currencyNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];


checkButton.addEventListener('click', function check() {
    hideMessage()

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {

            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateNotes(amountToBeReturned);



        } else {
            showMessage("Do you wanna wash plates?")
        }
    } else {
        showMessage("Invalid Bill Amount")
    }
})


function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message

}

function hideMessage(message) {
    msg.style.display = "none";
}



function calculateNotes(amountToBeReturned) {


    for (let i = 0; i < currencyNotes.length; i++) {
        var returnNotes = Math.trunc(amountToBeReturned / currencyNotes[i])
    
    
        amountToBeReturned = amountToBeReturned % currencyNotes[i]

        numberOfNotes[i].innerText = returnNotes 
    
    }

}

