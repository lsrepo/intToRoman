/**
 * This is a recursive approach
 */

const dict = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

const keys = Object.keys(dict).map(v => parseInt(v));

const intToRoman = num => {
  if (num <= 0) return ''
  const closestKey = keys.filter(v => v <= num).pop();

  const repeat = Math.floor(num / closestKey);
  const char = dict[closestKey]
  const remainder = num % closestKey;

  const prefix = Array(repeat).fill(char).join('');
  return `${prefix}${intToRoman(remainder)}`
};

const result = intToRoman(3872)
console.log('result:', result);