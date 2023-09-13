const fakeBin = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const digit = str.charAt(i);

    const num = +digit;

    if (num < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;
};

const fakeBinTwo = (str) => {
  return str
    .split("")
    .map((num) => (num < 5 ? 0 : 1))
    .join("");
};

console.log(fakeBin("5430985435"));
console.log(fakeBinTwo("5430985435"));
