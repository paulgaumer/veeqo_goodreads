/**
 * Decode a string with escaped characters to a string with readable tags
 * @param string - string
 */
export const htmlDecode = (string: string) => {
  let e = document.createElement('div');
  e.innerHTML = string;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};
