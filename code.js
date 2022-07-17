
function validate() {
    var bill = document.getElementById("bill").value;
    var selectTip = document.forms["calculator"]["tip"].value;
    var customTip = document.querySelector(".custom-input-percent").value;
    var numberOfPeople = document.getElementById("people").value;

    if (customTip) {
        selectTip = customTip;
    }


    if (numberOfPeople == 0) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
    }
    
    var tip = bill * (selectTip/100);
    var total = parseFloat(bill) + parseFloat(tip);

    var tipPer = tip/numberOfPeople;
    var totalPer = total/numberOfPeople


    if (bill && selectTip && numberOfPeople) {
        document.querySelector(".tip-amount").innerHTML = "$" + tipPer.toFixed(2);
        document.querySelector(".total-amount").innerHTML = "$" + totalPer.toFixed(2);
    }

}

function resetClick() {
    document.querySelector(".tip-amount").innerHTML = "$0.00";
    document.querySelector(".total-amount").innerHTML = "$0.00";
}
