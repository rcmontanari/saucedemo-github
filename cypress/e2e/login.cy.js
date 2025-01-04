describe('Testes de login do site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  before(function (){
    // disable Cypress's default behavior of logging all XMLHttpRequests and fetches to the Command Log
    cy.intercept({ resourceType: /xhr|fetch/ }, {log: false})
  })
  it('Validar o login do usuário padrão com sucesso', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.shopping_cart_link').should('be.visible')
  })
  
})