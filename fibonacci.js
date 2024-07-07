export function fibonacci(numIndex) {
  let previous = 0;
  let current = 1;
  let next;

  for (let index = 1; index < numIndex; index++) {
    next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

// PAIR PARTNER
// Sarah Agemo
