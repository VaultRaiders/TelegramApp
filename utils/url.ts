function isURL(string: string) {
  const urlRegex = /^https:\/\/[\w.-]+\.[a-z]{2,}$/i;
  return urlRegex.test(string);
}

function includeHttps(string: string) {
  return string?.includes("https://");
}
export { isURL, includeHttps };
