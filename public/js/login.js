const showSuccessMessage = (message) => {
  const successMessage = document.createElement("p");
  successMessage.textContent = message;
  successMessage.classList.add("success-message");
  const loginForm = document.querySelector(".login-form");
  loginForm.parentNode.insertBefore(successMessage, loginForm.nextSibling);

  // Remove the message after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
};

const showErrorMessage = (message) => {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.classList.add("error-message");
  const loginForm = document.querySelector(".login-form");
  loginForm.parentNode.insertBefore(errorMessage, loginForm.nextSibling);

  // Remove the message after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000);
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      showSuccessMessage("Login successful! Redirecting to profile page...");
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      showErrorMessage("Login failed. Please check your credentials.");
    }
  } else {
    showErrorMessage("Please provide both email and password.");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      showSuccessMessage("Signup successful! Redirecting to profile page...");
      // If successful, redirect the browser to the profile page after a delay
      setTimeout(() => {
        document.location.replace("/profile");
      }, 3000);
    } else {
      showErrorMessage("Signup failed. Please try again later.");
    }
  } else {
    showErrorMessage("Please fill in all required fields.");
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
