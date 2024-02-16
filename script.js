document.getElementById('visaApplicationForm').addEventListener('submit', function(event){
    // Basic Validation Code
    // Example: Check if the given name is entered
    var givenName = document.getElementById('givenName').value;
    if(givenName.trim() === '') {
        alert('Please enter your given name.');
        event.preventDefault(); // Prevent form submission
    }

    // Add similar checks for other required fields
});
