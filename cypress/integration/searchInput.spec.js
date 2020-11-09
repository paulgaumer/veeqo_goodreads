/// <reference types="Cypress" />

describe('Search Input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8888/');
  });

  it('Has an input field with a placeholder', () => {
    cy.get('[data-test="search-bar"]').should(
      'have.attr',
      'placeholder',
      'Ex: Harry Potter'
    );
  });

  it('Input accepts a search keyword and display results', () => {
    const input = 'Victor Hugo';
    cy.wait(1000)
      .get('[data-test="search-bar"]')
      .type(input, { force: true })
      .wait(3000)
      .get('[data-test="book-card"]');
  });

  it('Input accepts a search keyword, select as search by author and display results', () => {
    const input = 'Victor Hugo';
    cy.wait(1000)
      .get('[data-test="radio-author"]')
      .click()
      .get('[data-test="search-bar"]')
      .type(input, { force: true })
      .wait(3000)
      .get('[data-test="book-card"]');
  });

  it('Input accepts a search keyword, select as search by isbn and display 1 result', () => {
    const input = '1416556052';
    cy.wait(1000)
      .get('[data-test="radio-isbn"]')
      .click()
      .get('[data-test="search-bar"]')
      .type(input, { force: true })
      .wait(3000)
      .get('[data-test="book-card"]')
      .should('have.length', 1);
  });

  it('Input accepts a search keyword and a message appears if no result is found', () => {
    const input = 'hagsfd';
    cy.wait(1000).get('[data-test="search-bar"]').type(input).wait(3000);
    cy.get('[data-test="search-error"]');
  });

  it('Clicking an the author link on a book card redirects to author page', () => {
    const input = 'Victor Hugo';
    cy.wait(1000)
      .get('[data-test="search-bar"]')
      .type(input, { force: true })
      .wait(2000)
      .get('[data-test="book-card"]')
      .find('[data-test="author-link"]')
      .first()
      .wait(1000)
      .click();
    cy.url().should('include', '/authors');
    cy.get('[data-test="author-page"]');
  });
});
