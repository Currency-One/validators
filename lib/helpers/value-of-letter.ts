export default function valueOfLetter(value: string): number {
  return value.toUpperCase().charCodeAt(0) - 55
}
