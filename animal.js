document.getElementById('animal-details-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Gather form data
    const animalDetails = {
        type: document.getElementById('animal-type').value,
        breed: document.getElementById('breed').value,
        age: document.getElementById('age').value,
        weight: document.getElementById('weight').value,
        gender: document.getElementById('gender').value,
        breedingHistory: document.getElementById('breeding-history').value,
        pregnancyStatus: document.getElementById('pregnancy-status').value,
        medicalHistory: document.getElementById('medical-history').value
    };

    // You can store the details in local storage or send them to the server
    console.log('Animal Details Submitted:', animalDetails);
    alert('Animal details submitted successfully!');

    // Redirect to the next page if needed
    // window.location.href = 'next-page.html'; // Uncomment and change to next page
});
