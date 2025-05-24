// Get the elements
const contentSelect = document.querySelector('.content-select');
const scrollParent = document.querySelector('.scroll-parent');
const agreeBtn = document.querySelector('.agree-btn');
const contentSelectSvg = document.querySelector('svg');
const nextButton = document.querySelector('.next-btn button');

contentSelect.style.display = 'none';

// Add event listener to the agree button
let cardSelected = false; 

agreeBtn.addEventListener('click', function() {
    // Hide the scroll-parent section
    scrollParent.style.display = 'none';
    
    // Hide the agree button
    agreeBtn.style.display = 'none';
    
    // Display the content-select class
    contentSelect.style.display = 'block';
});

// Add event listener to the content-select SVG
contentSelectSvg.addEventListener('click', function() {
    // Hide the content-select
    contentSelect.style.display = 'none';
    scrollParent.style.display = 'block';
    agreeBtn.style.display = 'flex';
    nextButton.disabled = !cardSelected;
});

// Add event listener to the "Next" button
nextButton.addEventListener('click', function(event) {
    // If no card is selected, prevent the default behavior
    if (!cardSelected) {
        event.preventDefault();
         alert("Please select a card before proceeding.");
    }
});

// Add event listener to each card element
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Remove highlight from all cards
        cards.forEach(function(card) {
            card.style.backgroundColor = '';
            card.style.color = ''; 
            card.querySelector('.card-content p').style.color = ''; 
        });
        
        // Highlight the clicked card
        this.style.backgroundColor = '#008596';
        this.style.color = 'white'; // 
        this.querySelector('.card-content p').style.color = 'white';

        // Set the flag to indicate that a card is selected
        cardSelected = true;

        // Enable the Next button
        nextButton.disabled = false;
    });
});
