Cypress.Commands.add('buscarFilme', (filmId) => {
  return cy.request({
    method: 'GET',
    url: `films/${filmId}/`,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('buscarPersonagem', (nome) => {
  return cy.request({
    method: 'GET',
    url: 'people',
  }).then((response) => {
      return response.body.results.find((personagem) => personagem.name === nome)
    
    })

})
