function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById('recover-passoword-button').disable = !emailValid;

    const passowordValid = isPassowordValid();
    document.getElementById('login-button').disable = !emailValid || !passowordValid;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPassowordValid() {
    const passoword = document.getElementById('passoword').value;
    if (!passoword) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

