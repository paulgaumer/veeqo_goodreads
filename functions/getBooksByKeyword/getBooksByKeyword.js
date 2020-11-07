require('isomorphic-fetch');
const parser = require('fast-xml-parser');
const options = require('../shared/parserOptions.js');

const sortBooks = (books) => {
  const list = books.map((book) => {
    return {
      id: book.best_book.id,
      title: book.best_book.title,
      ratingsCount: book.ratings_count,
      rating: book.average_rating,
      author: {
        id: book.best_book.author.id,
        name: book.best_book.author.name,
      },
      publicationDate: {
        year: book.original_publication_year,
        month: book.original_publication_month,
        day: book.original_publication_day,
      },
      image: book.best_book.image_url,
    };
  });
  return list;
};

const getBooksByKeyword = async (keyword, type = 'title', page = '1') => {
  const url = `https://www.goodreads.com/search.xml?key=BzOzyH7EB1GpjXuKD6BNw&q=${keyword}&search_type=books&search[field]=${type}&page=${page}`;
  const res = await fetch(url);
  const text = await res.text();
  const jsonObj = parser.parse(text, options);
  const books = jsonObj.GoodreadsResponse.search.results.work;
  return sortBooks(books);
};

exports.handler = async (event) => {
  const keyword = event.queryStringParameters.keyword;

  try {
    const books = await getBooksByKeyword(keyword);
    return {
      statusCode: 200,
      body: JSON.stringify({ books }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
