// Function to show the specified section and hide others
function showSection(sectionId) {
    const sections = ['content', 'kids', 'parent'];

    // Hide all sections
    sections.forEach((sec) => {
        document.getElementById(sec).classList.add('hidden');
    });

    // Show the specified section
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to handle button clicks
function handleButtonClick(userType) {
    if (userType === 'child') {
        showSection('kids');
    } else if (userType === 'parent') {
        showSection('parent');
    }

    if (userType === 'ok') {
        showSection('content');
    }
}

// ==========================================preloader 
let loader = document.getElementById("preloader");

function hidePreloader() {
    loader.style.display = 'none';
    
}
window.addEventListener('load', function() {
    setTimeout(hidePreloader, 3000); 
});

// ======================================to hide the content
// Get the div element
const wholeDiv = document.querySelector('.whole');
wholeDiv.classList.add('hidden');
setTimeout(() => {
  wholeDiv.classList.remove('hidden');
}, 3000); 


