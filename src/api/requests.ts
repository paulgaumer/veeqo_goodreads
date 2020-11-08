export const getBooks = async (keyword: string, type: string) => {
  const res = await fetch(
    `/.netlify/functions/getBooksByKeyword?keyword=${keyword}&type=${type}`
  );
  const data = await res.json();
  return data.bookSearch;
};

export const getAuthorInfo = async (authorId: string) => {
  const res = await fetch(
    `/.netlify/functions/getAuthorInfo?authorId=${authorId}`
  );
  const data = await res.json();
  return data.author;
};
