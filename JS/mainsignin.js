function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "IMG01/eye.png";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "IMG01/eyeclose.png"; 
    }
}
// =====================================================
document.addEventListener('DOMContentLoaded', function () {
    // Function to show the sign-in modal
    function showSignInModal() {
        overlay.style.display = 'block';
        signinModal.style.display = 'block';
    }
  
    // Call the function to show the sign-in modal when the page loads
    showSignInModal();
  
  });
  
 