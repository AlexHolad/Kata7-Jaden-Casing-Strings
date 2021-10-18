const toJadenCase = (str) => {
  let arr = str.split("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result.push(arr[i].toUpperCase());
    } else if (arr[i - 1] === " ") {
      result.push(arr[i].toUpperCase());
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
};

console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));
