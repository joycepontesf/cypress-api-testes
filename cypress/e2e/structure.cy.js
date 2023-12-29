/// reference types="cypress" />

describe('Testes na estrutura da API de Star Wars', () => {

  // Uso de failOnStatusCode para impedir que o teste seja interrompido mesmo em uma situação onde o status code não é bem-sucedido, neste caso espera-se que haja a falha e que o retorno seja o status code 404 (Not Found). //

    it('Deve retornar status code 404 para uma URL inválida', () => {
      cy.request({
        url: 'people/?format=tray',
        failOnStatusCode: false
      }).then((response) =>{
          expect(response.status).to.eq(404)
      
        })
      
    })

    it('Deve retornar uma data válida no formato americano e não no formato brasileiro', () => {
      cy.request({
        method: 'GET',
        url: 'films/2'
      }).then((response) =>{
          expect(response.body.release_date).to.match(/^\d{4}-\d{2}-\d{2}$/).and.not.to.match(/^\d{2}-\d{2}-\d{4}$/)
      
        })

    })

    it('Deve validar o tempo de resposta da requisição', () => {
      let maxTempoResposta = 6000
  
      cy.request({
        method: 'GET',
        url: 'people'
      }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.duration).to.be.lessThan(maxTempoResposta)
        })
    
    })

})