document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formIsValid = validateForm();

    if (formIsValid) {
        let formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            birthdate: document.getElementById('birthdate').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value,
            terms: document.getElementById('terms').checked
        };
        document.getElementById('successMessage').textContent = 'Registro exitoso: ' + JSON.stringify(formData);
    } else {
        document.getElementById('successMessage').textContent = '';
    }
});

function validateForm() {
    let isValid = true;
    clearErrors();

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;
    if (!validateBirthdate()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateGender()) isValid = false;
    if (!validateTerms()) isValid = false;

    return isValid;
}

function validateName() {
    let name = document.getElementById('name').value;
    if (name.length < 3 || /\d/.test(name)) {
        showError('nameError', 'Nombre debe tener al menos 3 caracteres y no contener números.');
        return false;
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Correo electrónico inválido.');
        return false;
    }
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
        showError('passwordError', 'Contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, un número y un carácter especial.');
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    let confirmPassword = document.getElementById('confirmPassword').value;
    let password = document.getElementById('password').value;
    if (confirmPassword !== password) {
        showError('confirmPasswordError', 'Las contraseñas no coinciden.');
        return false;
    }
    return true;
}

function validateBirthdate() {
    let birthdate = document.getElementById('birthdate').value;
    let currentDate = new Date();
    let birthDate = new Date(birthdate);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 16) {
        showError('birthdateError', 'Debes tener al menos 16 años.');
        return false;
    }
    return true;
}

function validatePhone() {
    let phone = document.getElementById('phone').value;
    if (phone && !/^\d{9}$/.test(phone)) {
        showError('phoneError', 'El teléfono debe contener exactamente 9 dígitos.');
        return false;
    }
    return true;
}

function validateGender() {
    let gender = document.getElementById('gender').value;
    if (!gender) {
        showError('genderError', 'Por favor, selecciona un género.');
        return false;
    }
    return true;
}

function validateTerms() {
    if (!document.getElementById('terms').checked) {
        showError('termsError', 'Debes aceptar los términos y condiciones.');
        return false;
    }
    return true;
}

function showError(elementId, errorMessage) {
    document.getElementById(elementId).previousElementSibling.textContent = errorMessage;
    document.getElementById(elementId).previousElementSibling.style.borderColor = 'red';
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
        element.previousElementSibling.style.borderColor = '';
    });
}
