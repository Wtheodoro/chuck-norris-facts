/// <reference types="cypress" />

context("Categories", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")

    cy.intercept('GET', '**').as('getFact')
  })

  it("Check if ther is message on banner", () => {
    cy.get(".cy_banner p").should("be.visible")
  })

  it("Should load and record another fact when click on banner button", () => {
    cy.get(".cy_banner button").click()
    cy.get('.cy_smallCard').should('have.length', 1)
  })

  it("Should load and record another fact when click on category button", () => {
    cy.get(".cy_categories>button").each((button) => {
      cy.wrap(button).click()
      cy.wait('@getFact')
    })

    cy.get('.cy_smallCard').should('have.length', 16)
  })
})