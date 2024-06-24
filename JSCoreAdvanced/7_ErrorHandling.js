function getError(a, b) {
  if (b === 0) throw new Error("Второе число равно 0");
  return `Оба числа ${a} и ${b} не равны 0`;
}

try {
  console.log(getError(5, 2));
  console.log(getError(10, 0));
} catch (error) {
  console.error(error.message);
}
