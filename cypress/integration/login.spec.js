describe('Tests for /login', () => {
  it('attempts a valid login and should succeed', () => {
    cy.login('nBirkhead+provenir@sofitest.com', 'password1');
    cy.url().should('contain', 'dashboard');
  });

  it('attemps an invalid login (bad password) and should fail', () => {
    cy.login('nBirkhead+provenir@sofitest.com', 'badpassword');
    cy.contains('Email or password is incorrect').should('exist');
  });

  it('attempts an invalid login (bad email) and should fail', () => {
    cy.login('nBirkhead+provenirisntreal@sofitest.com', 'password1');
    cy.contains('Email or password is incorrect').should('exist');
  });

  it('attempt to log in with short password', () => {
    cy.login('nBirkhead+provenir@sofitest.com', 'pas');
    cy.contains('Password should be between 8 and 128 characters');
  });
});
