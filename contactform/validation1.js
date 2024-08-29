
console.log("JS file loaded");


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        console.log("Form submission triggered");

        
        if (!validateForm()) {
            console.log("Form is invalid. Not submitting.");
            event.preventDefault(); 
        } else {
            console.log("Form is valid. Submitting.");
            
        }
    });
});


function validateName() {
    const name = document.getElementById('name').value.trim();
    if (!/^[A-Za-z\s]+$/.test(name)) {
        displayValidationMessage('name-validation', 'Please enter a valid name (only English alphabets).');
        return false;
    } else {
        clearValidationMessage('name-validation');
        return true;
    }
}


function validateEmail() {
    const email = document.getElementById('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        displayValidationMessage('email-validation', 'Please enter a valid email address.');
        return false;
    } else {
        clearValidationMessage('email-validation');
        return true;
    }
}


function validateSubject() {
    const subject = document.getElementById('subject').value.trim();
    if (subject === '') {
        displayValidationMessage('subject-validation', 'Subject cannot be empty.');
        return false;
    } else {
        clearValidationMessage('subject-validation');
        return true;
    }
}


function validateMessage() {
    const message = document.getElementById('message').value.trim();
    if (message.length < 10 || /\s{2,}/.test(message)) {
        displayValidationMessage('message-validation', 'Message must be at least 10 characters long and cannot contain continuous blank spaces.');
        return false;
    } else {
        clearValidationMessage('message-validation');
        return true;
    }
}


function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    
    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
}


function displayValidationMessage(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.color = 'red';  
    element.style.display = 'block';  
}


function clearValidationMessage(elementId) {
    const element = document.getElementById(elementId);
    element.innerText = '';
    element.style.display = 'none';  
}





document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        console.log("Form submission triggered");

        
        if (!validateForm()) {
            console.log("Form is invalid. Not submitting.");
            event.preventDefault(); 
        } else {
            console.log("Form is valid. Submitting.");
            
            alert("Form submitted successfully!");
            
        }
    });
});


