const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const generateBtn = document.getElementById("generate");

const lowerEl = document.getElementById("lowercase");
const upperEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]<>?,.";

lengthEl.addEventListener("input", () => {
  lengthValue.textContent = lengthEl.value;
});

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  let chars = "";
  if (lowerEl.checked) chars += lowerChars;
  if (upperEl.checked) chars += upperChars;
  if (numberEl.checked) chars += numberChars;
  if (symbolEl.checked) chars += symbolChars;

  if (chars === "") {
    passwordEl.value = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  passwordEl.value = password;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});
