const M = ["", "M", "MM", "MMM"];
const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

/**
 * Only works within the range from 1 to 3999
 */
const decimalToRoman = num => {
  if (isNaN(num) || num < 1) {
    console.log("Please input a positive integer");
    return;
  }

  const m = Math.floor(num / 1000);
  const c = Math.floor((num % 1000) / 100);
  const x = Math.floor((num % 100) / 10);
  const i = Math.floor(num % 10);

  return M[m] + C[c] + X[x] + I[i];
};

if (process.release && process.release.name === "node") {
  const num = parseInt(process.argv[2]);
  const roman = decimalToRoman(num);
  if (roman) {
    console.log(roman);
  }
}

const createTestcases = () => Array
    .from({ length: 50 }, () =>
      Math.floor(Math.random() * 400 + 1)
    )
    .forEach(num => {
      const roman = decimalToRoman(num);
      console.log(`${num}: ${roman}`);
    });

