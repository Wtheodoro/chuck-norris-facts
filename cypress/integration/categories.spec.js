/// <reference types="cypress" />

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
]

context("Categories", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("Check if all categories loaded", () => {
    cy.get(".cy_categories>button").each((button, index) => {
      cy.wrap(button).should("contain.text",
      categories[index])
    })
  })
})