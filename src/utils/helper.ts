export function arrayToString(array: any[], separator : string = ", "): string {
  return array.map((obj) => obj.name? obj.name : obj).join(separator);
}