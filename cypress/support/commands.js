// eslint-disable-next-line
/// <reference types="cypress" />

//
// log in
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login/');
  cy.get('[name="email"]').type(email);
  cy.get('[name="password"]').type(password);
  cy.get('[data-qa="login"]').click();
});
