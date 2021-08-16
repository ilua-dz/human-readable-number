const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
   const n = Math.abs(number);
  if (n > 999) return;
  let result = [];
  const addUnit = (arr, charN, dev = 0, extra = '') => {
    result.push(arr[n.toString().split('').reverse().join('').charAt(charN) - dev] + extra);
  }
  const isInRange = (x, a, b) => (x >= a && x <= b);
  if (n > 99) addUnit(a, 2, 0, ' hundred');
  if (isInRange(n % 100, 10, 19) || isInRange(n, 10, 19)) addUnit(b, 0);
  if (n % 100 < 10 || n < 10) addUnit(a, 0);
  if (isInRange(n % 100, 20, 99) || isInRange(n, 20, 99)) {
    addUnit(c, 1, 2);
    addUnit(a, 0);
  }
  if (result.join('').endsWith('zero') && n !== 0) result.pop();
  return result.join(' ').trim();
}
