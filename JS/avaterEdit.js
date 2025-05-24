document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('first-name');
    const editSection = document.querySelector('.Edit-section');
    let messageShown = false;
    let errorMessage; // Define error message variable

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.Edit-section')) {
            if (input.value.trim() === '') {
                input.style.borderBottomColor = 'red';
                if (!messageShown) {
                    errorMessage = document.createElement('div');
                    errorMessage.textContent = 'Enter a valid name';
                    errorMessage.classList.add('error-message');
                    input.insertAdjacentElement('afterend', errorMessage); // Insert after input
                    messageShown = true;
                }
            } else {
                input.style.borderBottomColor = 'black';
                if (messageShown) {
                    errorMessage.remove();
                    messageShown = false;
                }
            }
        }
    });

    input.addEventListener('input', function() {
        input.style.borderBottomColor = 'black';
        if (messageShown) {
            errorMessage.remove();
            messageShown = false;
        }
    });

    // ======================================= display the profile imgs
    document.getElementById('click-me').addEventListener('click', function() {
        var editContainer = document.getElementById('edit-container');
        if (editContainer.style.display === 'none') {
            editContainer.style.display = 'block';
            window.addEventListener('scroll', disableScroll); // Disable scrolling when the Edit image is clicked
        } else {
            editContainer.style.display = 'none';
            window.removeEventListener('scroll', disableScroll); // Re-enable scrolling when the Edit image is clicked again
        }
    });

    document.querySelector('.Edit').addEventListener('click', function(event) {
        event.preventDefault();
    });

    //   ============================================== goback
    document.getElementById('back').addEventListener('click', function() {
        var editContainer = document.getElementById('edit-container');
        editContainer.style.display = 'none';
        window.removeEventListener('scroll', disableScroll); // Re-enable scrolling when the Edit image is clicked again
    });

    // Function to disable scrolling
    function disableScroll() {
        window.scrollTo(0, 0);
    }

    // =================================== 
    var elements = document.getElementsByClassName('clear');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
            alert('History cleared');
        });
    }
    document.getElementById('clear2').addEventListener('click', function() {
        alert('COMING SOON');
    });
    document.getElementById('clear3').addEventListener('click', function() {
        alert('COMING SOON');
    });
    
});

