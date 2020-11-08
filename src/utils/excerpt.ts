const excerpt = (text: string = '', characters: number = 65) => {
  const t = text.toString();
  return `${t.substring(0, characters)}${t.length >= characters ? '...' : ''}`;
};

export default excerpt;
