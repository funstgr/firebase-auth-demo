const circPrime = () => {
  const primes = [];
  const circPrimes = [];
  for (let i = 2; i <= 1000000; i++) {
    let addPrime = true;
    for (let j = 0; addPrime && j < primes.length; j++) {
      if (i % primes[j] === 0) {
        addPrime = false;
      }
    }
    if (addPrime) {
      primes.push(i);
    }
  }
  const higherPrimes = [];
  for (let k = 0; k < primes.length; k++) {
    // eslint-disable-next-line prefer-template
    const digits = ('' + primes[k]).split('');
    let cirPrime = true;
    let testPrimeInt;
    for (let l = 1; cirPrime && !higherPrimes.includes(primes[k]) && l < digits.length; l++) {
      const testPrimeStr = digits.join('');
      const testPrime = testPrimeStr.substring(l) + testPrimeStr.substring(0, l);
      testPrimeInt = parseInt(testPrime, 10);
      if (!primes.includes(testPrimeInt)) {
        cirPrime = false;
      }
      if (l >= 1 && testPrimeInt !== primes[k] && cirPrime === true) {
        higherPrimes.push(testPrimeInt);
      }
    }
    if (cirPrime && !higherPrimes.includes(primes[k])) {
      circPrimes.push(primes[k]);
    }
  }
  return circPrimes;
};

export default circPrime;
