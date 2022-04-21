describe('My First Test', () => {

  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit('/')
  })
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Productos del momento')
    cy.get('button.profile-button').as("profileButton")
    cy.get("@profileButton").click()
    cy.get('button.sign-in-button').click()
    cy.get('.signin__container',{timeout:1000}).should("be.visible");
    cy.get('.email-input').type("adrian@adrian.com")
    cy.get('.continue-button').click()
    cy.get('.password-input').type("adrian@adrian.com")
    cy.get('.continue-button').click()
    cy.get('.username').should('be','hola:)')

  })
})
