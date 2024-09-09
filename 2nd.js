// $(document).ready(function () {
//     // Store the initial HTML content of the form section to be duplicated
//     let x = $("#myForm").html();
//     let coun = 1; // Initialize counter

//     function createNewForm() {
//         coun++; // Increment counter for each new form section
//         let newForm = $(x); // Clone the initial form HTML
//         newForm.find(".b3").text(coun); // Update the counter in the cloned form
//         return newForm;
//     }

//     // When clicking the add button, duplicate the form and append after the last .a0
//     $(".b1").click(function () {
//         $("#myForm").append(createNewForm()); // Append new form after the last one
//     });

//     // When clicking the delete button, remove the closest form section
//     $(document).on("click", ".b2", function () {
//         $(this).closest('.a0').remove(); // Remove the closest .a0 container
//     });
// });
$(document).ready(function () {
    // Store the initial HTML content of the form section to be duplicated
    let x = $("#myForm").html();
    let coun = 1; // Initialize counter

    function createNewForm() {
        coun++; // Increment counter for each new form section
        let newForm = $(x); // Clone the initial form HTML
        newForm.find(".b3").text(coun); // Update the counter in the cloned form
        return newForm;
    }

    // When clicking the add button, duplicate the form and append after the last .a0
    $(".b1").click(function () {
        $("#myForm").append(createNewForm()); // Append new form after the last one
    });

    // When clicking the delete button, remove the closest form section
    $(document).on("click", ".b2", function () {
        $(this).closest('.a0').remove(); // Remove the closest .a0 container
        updateCounters(); // Update the counter numbers for remaining forms
    });

    // Function to update the counter numbers for all remaining forms
    function updateCounters() {
        $(".a0").each(function (index) {
            $(this).find(".b3").text(index + 1); // Update the .b3 text with the new index (1-based)
        });
        coun = $(".a0").length; // Reset the counter to the current number of forms
    }
});
