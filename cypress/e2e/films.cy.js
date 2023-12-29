/// reference types="cypress" />

import contrato from '../contract/films.contract';
    
describe('Testes no módulo de Films da API Star Wars', () => {
  
  // Criação de variável e uso de Before para otimizar e evitar duplicação de código. //

  let filmsResposta

  before(() => {
    cy.request({
      method: 'GET',
      url: 'films',
    }).then((response) => {
      filmsResposta = response.body
    })
  
  })

  // Foi instalada a Biblioteca Joi para validação da estrutura JSON da URL https://swapi.dev/api/films/?format=json. Os itens de validação estão disponíveis em pasta /contract/films.contract, conforme linha 3 de importação. //

  it('Deve retornar uma estrutura JSON válida', () => {
    cy.request('films/?format=json').then((response) => {
      return contrato.validateAsync(response.body);
    })

  })

  // Encapsulamento realizado com o recurso commands.js, permitindo um código mais limpo e de fácil reaproveitamento. Considerando que índices em arrays iniciam em 0, o filme com ID 10 estará no índice 9 do array.// 

  it('Deve validar se o filme 10 é válido e qual o tipo de retorno ao consultar', () => {
    cy.buscarFilme(9).then((response) => {
      cy.log(`Request para o filme 10: ${JSON.stringify(response)}`)
  
      if (response.body.detail) {
        cy.log(`Mensagem de erro: ${response.body.detail}`)
        expect(response.body.detail).to.include('Not found')
      } else {
        cy.log(`Título do filme 9: ${response.body.title}`)
        expect(response.body.title).to.not.be.empty;
      }
    })
  })

  it('Deve validar o nome correto de um determinado episódio de filme', () => {
    expect(filmsResposta.results[1].title).to.eq('The Empire Strikes Back')
  
  })

  it('Deve validar o ID do episódio e se o tipo do dado está correto', () => {
    expect(filmsResposta.results[1].episode_id).to.eq(5)
    expect(filmsResposta.results[1].episode_id).to.be.a('number')
  
  })

})