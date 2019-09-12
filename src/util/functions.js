export function kmToMi(value) {
  return (value * 0.6213711922).toFixed(2);
}

export function miToKm(value) {
  return (value / 0.6213711922).toFixed(2);
}

export function btb1(value) {
  return (value / 8).toFixed(3);
}

export function btb2(value) {
  return value * 8;
}

export function kmhms(value) {
  return (value / 3.6).toFixed(2);
}

export function mskmh(value) {
  return (value * 3.6).toFixed(2);
}
