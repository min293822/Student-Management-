// Script.js

// Function to save form data to localStorage when submitting the form on apply.html
function saveFormData() {
    // Get form data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const birthdate = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const township = document.getElementById('township').value;
    const street = document.getElementById('street').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const workphone = document.getElementById('workphone').value;
    const experience = document.getElementById('experience').value;
    const comment = document.getElementById('comment').value;

    // Create an object to store the data
    const studentData = {
        name: fname + ' ' + lname,
        birthdate: birthdate,
        gender: gender,
        address: `${country}, ${city}, ${township}, ${street}`,
        email: email,
        phone: phone,
        workphone: workphone,
        experience: experience,
        comment: comment
    };

    // Save the data in localStorage
    localStorage.setItem('studentData', JSON.stringify(studentData));

    // Redirect to home.html
    window.location.href = 'home.html';
}

// Function to populate the table in home.html with data from localStorage
function populateTable() {
    // Get the stored student data from localStorage
    const studentData = JSON.parse(localStorage.getItem('studentData'));

    if (studentData) {
        // Create a new table row
        const tableBody = document.getElementById('tbody');
        const newRow = document.createElement('tr');

        // Create and append table data cells for each data field
        newRow.innerHTML = `
            <td>${studentData.name}</td>
            <td>${studentData.birthdate}</td>
            <td>${studentData.gender}</td>
            <td>${studentData.address}</td>
            <td>${studentData.email}</td>
            <td>${studentData.phone}</td>
            <td>${studentData.workphone}</td>
        `;

        // Append the new row to the table body
        tableBody.appendChild(newRow);

        // Optionally, clear the stored data if needed
        localStorage.removeItem('studentData');
    }
}

// Event listener for apply.html form submission
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('subtn');
    if (submitButton) {
        submitButton.addEventListener('click', saveFormData);
    }
});

// Event listener for home.html to populate table on load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('tbody')) {
        populateTable();
    }
    
    newRow.addEventListener('click', function() {
            // Populate popup with student data
            document.getElementById('namestu').textContent = studentData.name;
            document.getElementById('datestu').textContent = studentData.birthdate;
            document.getElementById('genderstu').textContent = studentData.gender;
            document.getElementById('addressstu').textContent = studentData.address;
            document.getElementById('emailstu').textContent = studentData.email;
            document.getElementById('phonestu').textContent = studentData.phone;
            document.getElementById('workphonestu').textContent = studentData.workphone;
            document.getElementById('experiencestu').textContent = studentData.experience;
            document.getElementById('commentstu').textContent = studentData.comment;

            // Show the popup
            document.getElementById('popupstu').style.display = 'block';
        });
    
});
