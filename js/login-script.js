document.addEventListener('DOMContentLoaded', function() {
     function validateAll(event) {
         event.preventDefault(); 
         const username = document.getElementById("username");
         const email = document.getElementById("email");
         const phone = document.getElementById("number");
         const password = document.getElementById("password");
         const confirm = document.getElementById("confirm");
         const terms = document.getElementById("terms");
         if (username.value.trim() === "" || email.value.trim() === "" ||
             phone.value === "" || password.value === "" || confirm.value === "") {
             alert("All fields must be filled.");
         } else if (!email.value.endsWith("@gmail.com")) {
             alert("Email must end with @gmail.com");
         } else if (!phone.value.startsWith("0")) {
             alert("Phone number must start with 0");
         } else if (password.value !== confirm.value) {
             alert("Passwords do not match");
         } else if (!terms.checked) {
             alert("You must agree to the terms and services");
         } else {
             console.log("Button nya dipencet!");
             window.location.href = "index.html"; 
         }
     }
     document.getElementById("login-form").addEventListener("submit", validateAll);
 });