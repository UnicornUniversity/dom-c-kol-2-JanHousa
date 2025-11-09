// Převádí číslo z desítkové soustavy na dvojkovou soustavu
// npm test - úspěšně projdou všechny testy

export function main(inputNumber, inputNumberSystem, outputNumberSystem) {

  // Převedení vstupního řetězce na číslo
  let number = 0;
  for (let i = 0; i < inputNumber.length; i++) {
    const digit = inputNumber.charCodeAt(i) - 48;
    number = number * 10 + digit;
  }

  // Ošetření speciálního případu nuly
  if (number === 0) return "0";

  // Převod na dvojkovou soustavu
  let result = "";
  while (number > 0) {
    const remainder = number % 2;
    result = remainder + result;
    number = Math.floor(number / 2);
  }

  return result;
}

export function permittedInputSystems() {
  return [10];
}

export function permittedOutputSystems() {
  return [2];
}
