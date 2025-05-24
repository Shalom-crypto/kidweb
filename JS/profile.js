document.getElementById('nextButton').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get all required inputs with the .no-border class
    const requiredInputs = document.querySelectorAll('.no-border[required]');

    // Check if all required inputs are filled
    let isFormValid = true;
    requiredInputs.forEach(function(input) {
        const errorMessageId = input.getAttribute('data-error');
        const errorMessageElement = document.getElementById(errorMessageId);

        if (input.value.trim() === '') {
            isFormValid = false;
            errorMessageElement.textContent = 'Required';
        } else {
            errorMessageElement.textContent = '';
        }
    });

    // If the form is valid, proceed to the next page
    if (isFormValid) {
        window.location.href = './HTML/mainsignin.html';
    }

});



