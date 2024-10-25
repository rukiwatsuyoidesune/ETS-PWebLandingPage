function validateName(firstName, lastName) {
    var namePattern = /^[a-zA-Z\s,]+$/;

    if (!firstName || !lastName) {
        return "Nama depan dan nama belakang diperlukan.";
    }

    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        return "Nama depan atau nama belakang tidak valid. Hanya huruf, spasi, dan tanda koma yang diperbolehkan.";
    }
    return true;
}


function validateEmail(email) {
    var emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

    if (!email) {
        return "Email diperlukan.";
    }

    if (!emailPattern.test(email)) {
        return "Alamat email tidak valid.";
    }
    return true;
}

function validatePhone(phone) {
    var phonePattern = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

    if (!phone) {
        return "Nomor telepon diperlukan.";
    }

    if (!phonePattern.test(phone)) {
        return "Nomor telepon tidak valid.";
    }
    return true;
}

function validateGender() {
    var genderOptions = document.getElementsByName("gender");
    for (var i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            return true;
        }
    }
    return "Gender diperlukan.";
}

function validatePassword(password) {
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!password) {
        return "Kata sandi diperlukan.";
    }

    if (!passwordPattern.test(password)) {
        return "Kata sandi harus minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka.";
    }
    return true;
}

function submitForm(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    var validationName = validateName(firstName, lastName);
    var validationEmail = validateEmail(email);
    var validationPhone = validatePhone(phone);
    var validationPassword = validatePassword(password);
    var validationGender = validateGender();

    if (validationName !== true) {
        alert(validationName);
        return;
    }
    if (validationEmail !== true) {
        alert(validationEmail);
        return;
    }
    if (validationPhone !== true) {
        alert(validationPhone);
        return;
    }
    if (validationPassword !== true) {
        alert(validationPassword);
        return;
    }
    if (validationGender !== true) {
        alert(validationGender);
        return;
    }

    alert("Form berhasil dikirim!");

    window.location.href = "index.html";
}

document.getElementById("memberForm").addEventListener("submit", submitForm);