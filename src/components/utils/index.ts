export const makeRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

export function urlify(text: string, requiredUrl = false) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = urlRegex.exec(text);
  if (requiredUrl) {
    return match ? match[0] : null;
  } else {
    return match;
  }
}
export * from './colors';
