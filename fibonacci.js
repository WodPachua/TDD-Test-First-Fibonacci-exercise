export function fibonacci(numIndex) {
  let previous = 0;
  let current = 1;
  let next;

  if (numIndex > 0) {
    for (let index = 1; index < numIndex; index++) {
      next = previous + current;
      previous = current;
      current = next;
    }
  } else {
    return 0;
  }

  return current;
}

// PAIR PARTNER
// Sarah Agemo
