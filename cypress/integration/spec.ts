describe('My First Test', () => {

  beforeEach(() => {
    cy.viewport(1920,1080);
    cy.visit('/');
  })

  it('Login', () => {

    cy.visit('/')
    cy.get('button.profile-button').as('profileButton').click();
    cy.get('button.sign-in-button').click();
    cy.get('.mat-form-field-flex .mat-input-element').type('osman@gmail.com');
    cy.get('.mat-focus-indicator').click();
    //cy.get('.mat-dialog-0', {timeout: 1000}).should('be.visible');
  })
})
