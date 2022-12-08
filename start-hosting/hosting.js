// Select the form and the button
const form = document.querySelector("form");
const button = form.querySelector("button");

// Set the button to be disabled by default
button.disabled = true;

// Add a change event listener to the form
form.addEventListener("change", () => {
  // Check if all required fields have a value
  const formComplete = Array.prototype.every.call(form.querySelectorAll("input[required], select[required]"), input => input.value);

  // If all required fields have a value, enable the button, otherwise disable the button
  button.disabled = !formComplete;
  console.log(formComplete)
});