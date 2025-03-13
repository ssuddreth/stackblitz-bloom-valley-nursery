// Footer Newsletter Sign-up / Subscribe Function
function subscribe() {
  const emailInput = document.getElementById('newsletter-email');
  if (emailInput.checkValidity()) {
    alert('Thanks for Subscribing!');
  } else {
    emailInput.reportValidity(); // Shows validation message if invalid
  }
}
