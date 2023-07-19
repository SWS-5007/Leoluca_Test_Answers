function calculateSeries(n) {
  if (n < 2) {
    throw new Error("Invalid input");
  }

  let cur = 0;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result += 1 / (i * (i - 1));
  }

  return result + cur;
}
