Cypress.Commands.add('buscarFilme', (filmId) => {
  cy.request({
    method: 'GET',
    url: `films/${filmId}/`,
    failOnStatusCode: false,
  }).then((response) => {
        cy.log(`Request para o filme ${filmId}: ${JSON.stringify(response)}`)
    if (response.body.detail) {
        cy.log(`Mensagem de erro: ${response.body.detail}`)
        expect(response.body.detail).to.include('Not found')   
      } else {
        cy.log(`Título do filme ${filmId}: ${response.body.title}`)
        expect(response.body.title).to.not.be.empty;
      
      }    
    
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
