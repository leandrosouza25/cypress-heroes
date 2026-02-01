describe('template spec HERO', () => {
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/heroes');
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').click().type('admin@test.com')
    cy.get('[data-cy="password"]').click().type('test123')
    cy.get('.text-white').click()
  })

  it('Create new hero', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').click().type('admin@test.com')
    cy.get('[data-cy="password"]').click().type('test123')
    cy.get('.text-white').click()
    cy.get("[href='/heroes/new']").click()
    cy.get("[name='name']").click().type('Mr.Cy Heroes 26')
    cy.get("[name='price']").click().type("8")
    cy.get("[name='fans']").click().type('99')
    cy.get("[name='saves']").click().type('150')
    cy.get(':nth-child(5) > .mb-2').click()
    cy.get("[value='3']").click() // Opção Super Strength
    cy.get(".text-white").eq(1).click()
    cy.visit("http://localhost:3000/heroes")
    cy.get('header.text-gray-500 > .justify-between').should('be.visible')

  })

  it('Login and Logout', () => {
    cy.visit('http://localhost:3000/heroes');
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').click().type('admin@test.com')
    cy.get('[data-cy="password"]').click().type('test123')
    cy.get('.text-white').click()
    cy.get('.max-w-5xl').should('be.visible')
    cy.get('nav > .flex > :nth-child(2) > .undefined').click()
    cy.get('header.text-gray-500 > .justify-between').should('be.visible')
  })
})