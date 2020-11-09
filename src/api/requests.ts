export const getBooks = async (
  keyword: string,
  type: string,
  page: number = 1
) => {
  const res = await fetch(
    `/.netlify/functions/getBooksByKeyword?keyword=${keyword}&type=${type}&page=${page}`
  );
  const data = await res.json();
  return data;
};

export const getAuthorInfo = async (authorId: string) => {
  const res = await fetch(
    `/.netlify/functions/getAuthorInfo?authorId=${authorId}`
  );
  const data = await res.json();
  return data.author;
};
