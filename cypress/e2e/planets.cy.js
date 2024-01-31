import contrato from '../contract/planets.contract';

describe('Planets module of The Star Wars API', () => {

  let planetsResposta;

  before(() => {
    cy.request({
      method: 'GET',
      url: 'planets',
    }).then(
      (response) => {
        planetsResposta = response.body
      })
  })

  it('Should return a valid JSON structure from the Films module of the Star Wars API', () => {
    cy.request({
      method: 'GET',
      url: 'planets/?format=json',
    }).then((response) => {
      expect(response.status).to.be.equal(200)
      return contrato.validateAsync(response.body)
    })
  })

  it('Should confirm the total population of the planet and the returned data type in the Films module', () => {
    cy.request({
      method: 'GET',
      url: 'planets',
    }).then((response) => {
      expect(planetsResposta.results[2].population).to.eq('1000').and.to.be.a('string')
      expect(response.status).to.be.equal(200)
    })
  })
})