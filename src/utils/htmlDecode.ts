export const htmlDecode = (string: string) => {
  let e = document.createElement('div');
  e.innerHTML = string;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};
