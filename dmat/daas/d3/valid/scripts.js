document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const address = document.getElementById('address').value;

    if (validateForm(firstName, lastName, email, phone, dob, course, address)) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
});

function validateForm(firstName, lastName, email, phone, dob, course, address) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const today = new Date().toISOString().split('T')[0];

    if (!firstName || !lastName || !email || !phone || !dob || !course || !address) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    if (dob > today) {
        alert('Date of birth cannot be in the future.');
        return false;
    }

    if (!course) {
        alert('Please select a course.');
        return false;
    }

    return true;
}
