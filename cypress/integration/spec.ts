describe('Authentication module', function() {

  beforeEach(()=>{
    cy.viewport(1536,743);
    cy.visit('/home');

    cy.get('button.profile-button').click();
    cy.get('button.sign-in-button').click();

    cy.get('.signin__container',{timeout: 1000}).should('be.visible');
  })
   it('Visits the initial project page', () => {
    cy.contains('Productos del momento')
    cy.get('button.profile-button').as('profileButton').click();
    cy.get('@profileButton').type('Fernando');
    cy.get('button.sign-in-button').click();
  })

  it('Existing unauthenticated user sign in correctly, redirects to user profile', function(){
    cy.get('.signin__container .signin__email input').type('prueba@gmail.com');
    cy.get('.signin__container .signin__password input').type('Prueba123');
  })
})
