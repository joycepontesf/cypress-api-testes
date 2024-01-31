import contrato from '../contract/films.contract';
    
describe('Films module of The Star Wars API', () => {
  
  let filmsResponse

  before(() => {
    cy.request({
      method: 'GET',
      url: 'films',
    }).then((response) => {
      filmsResponse = response.body
    })
  })

  it('Should return a valid JSON structure', () => {
    cy.request('films/?format=json').then((response) => {
      expect(response.status).to.equal(200)
      return contrato.validateAsync(response.body)
    })
  })

  it('Should validate the existence of movie 10 and the type of response when queried', () => {
    cy.filmSearch(9).then((response) => {
      cy.log(`Request para o filme 10: ${JSON.stringify(response)}`)
  
      if (response.body.detail) {
        expect(response.body.detail).to.include('Not found')
      } else {
        expect(response.body.title).to.not.be.empty
      }
        expect(response.status).to.eq(404)
    })
  })

  it('Should validate the correct name of a specific movie episode', () => {
    expect(filmsResponse.results[1].title).to.eq('The Empire Strikes Back')
  })

  it('Should validate the episode ID and ensure the data type is correct', () => {
    expect(filmsResponse.results[1].episode_id).to.be.a('number')
    expect(filmsResponse.results[1].episode_id).to.eq(5)
  })
})