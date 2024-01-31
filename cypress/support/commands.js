Cypress.Commands.add('filmSearch', (filmId) => {
  return cy.request({
    method: 'GET',
    url: `films/${filmId}/`,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('characterSearch', (nome) => {
  return cy.request({
    method: 'GET',
    url: 'people',
  }).then((response) => {
    expect(response.status).to.equal(200)
    return response.body.results.find((character) => character.name === nome)
    })
})
