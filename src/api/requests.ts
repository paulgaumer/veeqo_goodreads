export const getBooks = async (keyword: string) => {
  const res = await fetch(
    `/.netlify/functions/getBooksByKeyword?keyword=${keyword}`
  );
  const data = await res.json();
  return data.books;
};

export const getAuthorInfo = async (authorId: string) => {
  const res = await fetch(
    `/.netlify/functions/getAuthorInfo?authorId=${authorId}`
  );
  const data = await res.json();
  return data.author;
};
