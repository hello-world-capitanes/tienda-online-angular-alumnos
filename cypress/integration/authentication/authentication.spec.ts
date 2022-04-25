describe('Authentication module', function () {
  beforeEach(() => {
    cy.viewport(1536, 743);
    cy.visit('/home');

    cy.get('button.profile-button').click();
    cy.get('button.sign-in-button').click();

    cy.get('.signin__container', { timeout: 1000 }).should('be.visible');
  });

  it('Existing unauthenticated user sign in correctly, redirects to user profile', function () {
    cy.get('.signin__container form .signin__email input').type(
      'fernando@devanddel.com'
    );
    cy.get(
      '.signin__container .action-button__container button.confirm-button'
    ).as('confirm-button');
    cy.get('@confirm-button').click();
    cy.get('.signin__container .signin__password input').type('Admin1234#');
    cy.get('@confirm-button').click();

    cy.get('.user-card', { timeout: 2000 }).should('be.visible');

    cy.get(
      '.user-card > mat-card mat-card-content > p:nth-of-type(1)'
    ).contains('fernando@devanddel.com');
    cy.get(
      '.user-card > mat-card mat-card-content > p:nth-of-type(2)'
    ).contains('Fernando López Carrión');
  });

  it('None existing unauthenticated user not sign in, sign up modal appears', function () {
    cy.get('.signin__container form .signin__email input').type(
      'test@test.com'
    );
    cy.get('.signin__container .action-button__container button.confirm-button')
      .as('confirm-button')
      .click();
    cy.get(
      '.signin__container .action-button__container button.confirm-button',
      { timeout: 2000 }
    ).should('not.exist');
    cy.get('app-sign-up-modal .signup__container', { timeout: 1000 }).should(
      'be.visible'
    );
  });
});
