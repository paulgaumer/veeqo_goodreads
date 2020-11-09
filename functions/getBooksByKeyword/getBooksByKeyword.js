require('isomorphic-fetch');
const parser = require('fast-xml-parser');
const options = require('../shared/parserOptions.js');

/**
 * Create a structured object from books response
 * @param books - array
 */
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

/**
 * Fetch books from the GoodReads API if type is Title or Author
 * @param keyword - string
 * @param type - string
 * @param page - number
 */
const getBooksByKeyword = async (keyword, type = 'title', page) => {
  const url = `https://www.goodreads.com/search.xml?key=BzOzyH7EB1GpjXuKD6BNw&q=${keyword}&search_type=books&search[field]=${type}&page=${page}`;
  const res = await fetch(url);
  const text = await res.text();
  const jsonObj = parser.parse(text, options);
  const books = jsonObj.GoodreadsResponse.search.results.work;
  const results = {
    search: {
      totalResults: jsonObj.GoodreadsResponse.search['total-results'],
      activePage: Number(page),
      totalPages: Math.ceil(
        jsonObj.GoodreadsResponse.search['total-results'] / 20
      ),
      keyword: keyword,
      type: type,
    },
    books: sortBooks(books),
  };
  return results;
};

/**
 * Fetch books from the GoodReads API if type is Isbn
 * @param keyword - string
 * @param type - string
 */
const getBooksByIsbn = async (keyword, type) => {
  const url = `https://www.goodreads.com/search.xml?key=BzOzyH7EB1GpjXuKD6BNw&q=${keyword}`;
  const res = await fetch(url);
  const text = await res.text();
  const jsonObj = parser.parse(text, options);
  const book = jsonObj.GoodreadsResponse.search.results.work;
  return {
    search: {
      totalResults: jsonObj.GoodreadsResponse.search['total-results'],
      activePage: 1,
      totalPages: 1,
      keyword: keyword,
      type: type,
    },
    books: sortBooks([book]),
  };
};

/**
 * Send books data back to the application
 */
exports.handler = async (event) => {
  const { keyword, type, page } = event.queryStringParameters;

  const EmptyResults = {
    search: {
      totalResults: 0,
      activePage: 1,
      totalPages: 1,
      keyword: keyword,
      type: type,
    },
    books: [],
  };

  try {
    const bookSearch =
      type === 'isbn'
        ? await getBooksByIsbn(keyword, type)
        : await getBooksByKeyword(keyword, type, page);
    return {
      statusCode: 200,
      body: JSON.stringify({ bookSearch, api: { status: 200 } }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ bookSearch: EmptyResults, api: { status: 500 } }),
    };
  }
};
