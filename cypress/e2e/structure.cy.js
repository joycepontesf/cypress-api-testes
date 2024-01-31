describe('Structure of The Star Wars API', () => {

  it('Should return a status code 404 for an invalid URL in the Films module', () => {
    cy.request({
      url: 'people/?format=jsonx',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Should return a valid date in the American format, not the Brazilian format', () => {
    cy.filmSearch(1).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.release_date).to.match(/^\d{4}-\d{2}-\d{2}$/).and.not.to.match(/^\d{2}-\d{2}-\d{4}$/)
    })
  })

  it('Should validate the response time of the request in the Films module', () => {
    let maxResponseTime = 10000
    cy.request({
      method: 'GET',
      url: 'people'
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.lessThan(maxResponseTime)
    })
  })
})