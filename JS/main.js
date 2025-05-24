
// ===================== SCROLL ==============================
 
const nav = document.querySelector('nav');
// Listen for the scroll event
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        // Remove the class when at the top
        nav.classList.remove('scrolled');
    }
});

// ===================== HOVER ON SEARCH ===============================

const searchInput = document.querySelector('.nav-middle .search-box input');

// Listen for the focus and blur events
searchInput.addEventListener('focus', function () {
    // Add a class when the input is focused
    searchInput.parentElement.classList.add('focused');
});

searchInput.addEventListener('blur', function () {
    // Remove the class when the input loses focus
    searchInput.parentElement.classList.remove('focused');
});

// ===================== slice afeter 12th word ===============================

let vidInfoElements = document.querySelectorAll('.vid-info');

vidInfoElements.forEach(function (vidInfoElement) {
    let originalText = vidInfoElement.textContent.trim();
    let words = originalText.split(' ');
    // Check if the number of words is greater than 8
    if (words.length > 8) {
        // Slice the array to keep only the first 8 words
        let truncatedWords = words.slice(0, 12);
        let truncatedText = truncatedWords.join(' ');   
        truncatedText += '...';
        vidInfoElement.innerHTML = '<span>' + truncatedText + '</span>';
    }
});


// ============================================Video Blocking

let modal = document.getElementById("blockVideoModal");
const flexDivImg = document.getElementById('flexdiv-img');

function toggleModal() {
  modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

flexDivImg.addEventListener('click', function (event) {
          // Prevent the default action of the click event
          event.preventDefault();
          openModal();
        });

        // ===========================================sub btn
        document.addEventListener("DOMContentLoaded", function () {
        var subscribeButton = document.querySelector("#subcribe-btn button");
        var subscribedImage = document.querySelector("#subcribe-btn img");

        // Variable to track subscription state
        var isSubscribed = false;

        subscribeButton.addEventListener("click", function () {
          if (isSubscribed) {
            
            // If already subscribed, change to unsubscribe state
            subscribeButton.innerHTML = "<p>follow</p>";
            subscribeButton.style.backgroundColor = "";
            subscribedImage.src = "IMG01/Group(1).png";
          } else {
            // If not subscribed, change to subscribe state
            subscribeButton.innerHTML = "<p>followed</p>";
            subscribeButton.style.backgroundColor = "gray";
            subscribedImage.src = "./IMG01/Frame.png";
          }

          // Toggle the subscription state
          isSubscribed = !isSubscribed;
        });
      });

    //================================================== placehover to empty
function setPlaceholder() {
  var inputElement = document.querySelector('.nav-middle .search-box input[type="text"]');
  
  if (window.innerWidth <=764    ) {
    // Set placeholder to an empty string for small screens
    inputElement.placeholder = '';
  } else {
    // Set the default placeholder for larger screens
    inputElement.placeholder = 'Search ChildCenima';
  }
}

// Initial call to set the placeholder on page load
setPlaceholder();

// Event listener to update the placeholder on window resize
window.addEventListener('resize', setPlaceholder);

document.addEventListener('DOMContentLoaded', function () {
  // Function to show the sign-in modal
  function showSignInModal() {
      overlay.style.display = 'block';
      signinModal.style.display = 'block';
  }

  // Call the function to show the sign-in modal when the page loads
  showSignInModal();

});

//  BACK ARROW ===============================
let backImage = document.getElementById('back-arrow');

backImage.addEventListener('click',function(){
  window.history.back();
})


// ====================================

