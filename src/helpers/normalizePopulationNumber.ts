export default function normalizePopulationNumber(num: number | string) {
  const dataString = num.toString().split("").reverse().join("");
  let index = 1;
  let result = "";
  for (const char of dataString) {
    if (index % 3 == 0) {
      result += char + ",";
    } else {
      result += char;
    }
    index += 1;
  }
  result = result.split("").reverse().join("");
  if (result[0] === ",") {
    result = result.substring(1);
  }
  return result;
}
