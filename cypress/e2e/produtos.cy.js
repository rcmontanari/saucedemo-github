describe('Testes da tela de produtos do site', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, {log: false})
      })

    it('Teste login', () => {
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.contains('[data-test="shopping-cart-badge"]', '1')
            .should('be.visible')
    })
})