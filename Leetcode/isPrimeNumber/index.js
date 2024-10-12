const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if ((n % i === 0)) {
      count++;

      if ((n / i !== i)) {
        count++;
      }
    }
  }

  if (count === 2) {
    return true;
  }

  return false;
}

const temp = [];
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    temp.push(i);
  }
}

console.log(temp);