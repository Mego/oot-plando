export function arrayRepeat(item, count = 1, transform = (x, c, t) => x) {
  const arr = [];
  for (let i = 1; i <= count; ++i) {
    arr.push(transform(item, i, count));
  }
  return arr;
}

export function showLocationsJSON(obj) {
  const json = '"locations": ' + JSON.stringify(obj);
  const html = '<code>' + json + '</code>';
  const blob = new Blob([html], { type: 'text/html' });
  const blobURL = URL.createObjectURL(blob);
  window.open(blobURL);
}
