const passwordBox = document.getElementById("password");
const upperCase= "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase= "qwertyuioplkjhgfdsazxcvbnm";
const number = "1234567890";
const symbols = "~`!@#$%^&*()_+={[]|\:;,<>./?";
const lenght = 12;

const allCharacters = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * Symbol.length)];


    while(lenght > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    };

    passwordBox.value = password;
};

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    let show = document.querySelector(".copied");
    show.classList.add("show");
    setTimeout(() => {
        show.classList.remove("show");
    }, 400);
}