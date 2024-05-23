export function validateMultipleOf3(number: number) {
  if (typeof number !== "number")
    throw new Error("Eso no es un número válido troncho/a");
  return number % 3 === 0;
}
