export function trimCurrency(num: number) {
  return Number(num.toFixed(2));
}

export function isNumber(number: any) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}
