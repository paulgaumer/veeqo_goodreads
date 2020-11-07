require('isomorphic-fetch');
const parser = require('fast-xml-parser');
const options = require('../shared/parserOptions.js');

const getAuthorInfo = async (authorId) => {
  const url = `https://www.goodreads.com/author/show?key=BzOzyH7EB1GpjXuKD6BNw&id=${authorId}.xml `;
  const res = await fetch(url);
  const text = await res.text();
  const jsonObj = parser.parse(text, options);
  const {
    name,
    fans_count,
    author_followers_count,
    image_url,
    about,
    hometown,
    books,
  } = jsonObj.GoodreadsResponse.author;
  const author = {
    name,
    fans_count,
    author_followers_count,
    image_url,
    about,
    hometown,
    books: books.book,
  };
  return author;
};

exports.handler = async (event) => {
  const authorId = event.queryStringParameters.authorId;

  try {
    const author = await getAuthorInfo(authorId);
    return {
      statusCode: 200,
      body: JSON.stringify({ author }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
