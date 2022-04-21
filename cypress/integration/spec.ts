describe('My First Test', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('/')
  });

  it('Test del login', () => {
    cy.contains('Productos del momento')
    cy.get('button.profile-button').click();

    cy.get('button.sign-in-button').click();
    cy.get('.signin__container', {timeout:1000}).should('be.visible');

    cy.get('.emailInput',{timeout:1000}).should('be.visible');
    cy.get('.emailInput').type('fernando@devanddel.com');

    cy.get('button.continueButton', {timeout:1000}).should('be.visible');
    cy.get('button.continueButton').click();

    cy.get('.passwordInput',{timeout:1000}).should('be.visible');
    cy.get('.passwordInput').type('admin1234#');

    cy.get('button.continueButton').click();
  })
})
