require('isomorphic-fetch');
const parser = require('fast-xml-parser');
const options = require('../shared/parserOptions.js');

const getBooksByTitle = async (title) => {
  const url = `https://www.goodreads.com/search.xml?key=BzOzyH7EB1GpjXuKD6BNw&q=${title}`;
  const res = await fetch(url);
  const text = await res.text();
  const jsonObj = parser.parse(text, options);
  const books = jsonObj.GoodreadsResponse.search.results.work;
  return books;
};

exports.handler = async (event) => {
  try {
    const books = await getBooksByTitle('Musashi');
    return {
      statusCode: 200,
      body: JSON.stringify({ books }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
