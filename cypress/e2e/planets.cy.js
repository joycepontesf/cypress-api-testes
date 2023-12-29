/// reference types="cypress" />

import contrato from '../contract/planets.contract';

describe('Testes no módulo de Planets da API Star Wars', () => {
    
    let planetsResposta;

    before(() => {
        cy.request({
          method: 'GET',
          url: 'planets',
        }).then((response) => {
          planetsResposta = response.body
        })
      
    })

    // Foi instalada a Biblioteca Joi para validação da estrutura JSON da URL https://swapi.dev/api/planets/?format=json. Os itens de validação estão disponíveis em pasta /contract/planets.contract, conforme linha 3 de importação. //

        it('Deve retornar uma estrutura JSON válida', () => {
            cy.request({
                method: 'GET',
                url: 'planets/?format=json',
            }).then((response) => {
            return contrato.validateAsync(response.body)
            })

        })

        it('Deve confirmar o total de população do planeta e o tipo de dado retornado', () => {
            cy.request({
                method: 'GET',
                url: 'planets',
            }).then((response) =>{
                expect(planetsResposta.results[2].population).to.eq('1000').and.to.be.a('string')
            })
    
        })  

})