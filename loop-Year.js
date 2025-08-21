let starY = 2000;
let endY = 3000;

while (starY <= endY) {
  if ((starY % 4 === 0 && starY % 100 !== 0) || (starY % 400 === 0)) {
  console.log(`Year: ${starY}`);
  }
  starY++;
}