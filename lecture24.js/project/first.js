// Tax calculation on form submission
document.getElementById("tax-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing

    const income = parseFloat(document.getElementById("income").value);
    let tax = 0;

    if (isNaN(income) || income < 0) {
        document.getElementById("result").innerHTML = "Please enter a valid income.";
        return;
    }

    // Tax Slabs
    //No tax on income up to ₹2,50,000

                //5% on ₹2.5–5 lakh

                //20% on ₹5–10 lakh

                 //30% on income above ₹10 lakh
 
 
                 if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        tax = (250000 * 0.05) + (income - 500000) * 0.2;
    } else {
        tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
    }

    document.getElementById("result").innerHTML =
        `<h3>Your calculated tax is: ₹${tax.toFixed(2)}</h3>`;
});

// Reset button functionality
document.getElementById("reset-btn").addEventListener("click", function () {
    document.getElementById("income").value = "";
    document.getElementById("result").innerHTML = "";
});
