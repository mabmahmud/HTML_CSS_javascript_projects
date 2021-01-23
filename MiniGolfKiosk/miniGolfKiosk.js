/*/
Name: Don Bowers and Modified by Mohammad Rrahman
Date: 2020-04-08
Purpose: Using javascript and jquery library to modify mini golf kiosk html interface.
*/

$(document).ready(function () {
    //declare variable to hold total amount after tax
    let $totalAfterTax = 0.00;

    //effect to hide total area
    $('#totalArea').toggle();

    //display results when form has data from the user
    $('#adults, #children, #caa, #mil, #fun').on('change', function () {
        $('#totalArea').show();
        updateTotals();
    })
    // click to pop up dialogue box for change
    $('#changeButton').on('click', calculateChange);

    // click to reset the form
    $('#reset').on('click', resetForm);


// create function to calculate the total amount
    function updateTotals() {
        // get the data
        let $adults = $("#adults").val();
        let $children = $("#children").val();
        // ensure a qty is selected for above
        if ($adults == 0 && $children == 0) {
            // they need to select a qty for children or adults
            alert("You must select a quantity for adults or children.");
        } else {

            // calculate costs
            $("#numAdults").val($adults);
            let $adultTotal = $adults * 4.00;

            $("#numChildren").val($children);
            let $childTotal = $children * 2.00;

            $("#totalAdultsDiv").html("$" + $adultTotal.toFixed(2));
            $("#totalChildrenDiv").html("$" + $childTotal.toFixed(2));
            let $totalBeforeTax = ($adultTotal + $childTotal);

            // get discount radio choice
            let $deduct = 0;
            let $discountString = "None";
            if ($("#caa").prop("checked")) {
                $deduct = $totalBeforeTax * .10;
                $totalBeforeTax = $totalBeforeTax - $deduct;
                $discountString = "CAA saved $" + $deduct.toFixed(2);
            } else if ($("#mil").prop("checked")) {
                $deduct = $totalBeforeTax * .25;
                $totalBeforeTax = $totalBeforeTax - $deduct;
                $discountString = "Military saved $" + $deduct.toFixed(2);
            } else if ($("#fun").prop("checked")) {
                $deduct = $totalBeforeTax * .50;
                $totalBeforeTax = $totalBeforeTax - $deduct;
                $discountString = "Super Fun Club saved $" + $deduct.toFixed(2);
            }

            $("#discountString").html($discountString);

            $totalAfterTax = $totalBeforeTax * 1.1;
            $("#totalBeforeTaxDiv").html("$" + $totalBeforeTax.toFixed(2));
            $("#totalAfterTaxDiv").html("$" + $totalAfterTax.toFixed(2));
        } // end if no adults or children selected

    } // end update Totals function

//create function to calculate the change
    function calculateChange() {
        let $amountGiven = parseFloat(prompt("Enter amount client gave you"));
        let $changeDue = $amountGiven - $totalAfterTax;
        $("#changeDue").html("$" + $changeDue.toFixed(2));
        $("#changeOutput").css("display", "block");
    }
});

//create function to reset the form
function resetForm() {
    window.location = "miniGolfKiosk.html";
}
