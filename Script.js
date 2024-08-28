// Function to handle form submission and send data to Home.html
function handleFormSubmission() {
  const formData = {
    name: `${document.getElementById('fname').value} ${document.getElementById('lname').value}`,
    birthdate: document.getElementById('date').value,
    gender: document.getElementById('gender').value,
    address: `${document.getElementById('address').value}, ${document.getElementById('city').value}, ${document.getElementById('township').value}, ${document.getElementById('street').value}`,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    workphone: document.getElementById('workphone').value,
    experience: document.getElementById('experience').value,
    comment: document.getElementById('comment').value
  };

  const homeWindow = window.open('Home.html', 'homeWindow', 'width=800,height=600');
  
  homeWindow.onload = function() {
    homeWindow.postMessage(formData, '*');
  };
}

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('subtn');
  if (submitButton) {
    submitButton.addEventListener('click', handleFormSubmission);
  }
});

// In Home.html: Handle receiving data and displaying it
window.addEventListener('message', function(event) {
  if (event.origin !== window.location.origin) {
    return; // Ignore messages from other origins
  }

  const data = event.data;
  if (data && document.getElementById('tbody')) {
    const tbody = document.getElementById('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.birthdate}</td>
      <td>${data.gender}</td>
      <td>${data.address}</td>
      <td>${data.email}</td>
      <td>${data.phone}</td>
      <td>${data.workphone}</td>
    `;
    tbody.appendChild(row);
  }
});
