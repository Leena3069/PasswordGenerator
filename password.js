let passwordGenerate = document.getElementById("Password");
let length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()-+|}{[]></-=";

let allChar = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  // password = password + allChar[Math.floor(Math.random() * allChar.length)]
  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordGenerate.value = password;
}
function copyPassword() {
  passwordGenerate.select();
  document.execCommand("copy");
}
