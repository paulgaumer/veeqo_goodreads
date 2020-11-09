/**
 * Create a shorter version of a given string
 * @param text - string
 * @param characters - number
 */
const excerpt = (text: string = '', characters: number = 65) => {
  const t = text.toString();
  return `${t.substring(0, characters)}${t.length >= characters ? '...' : ''}`;
};

export default excerpt;
