const Joi = require('joi')

const filmSchema = Joi.object({
  count: Joi.number().required(),
  next: Joi.string().allow(null).optional(),
  previous: Joi.string().allow(null).optional(),
  results: Joi.array().items({

    title: Joi.string().required(),
    episode_id: Joi.number().integer().required(),
    opening_crawl: Joi.string().required(),
    director: Joi.string().required(),
    producer: Joi.string().required(),
    release_date: Joi.date().required(),
    characters: Joi.array().items(Joi.string().uri({ scheme: ['http', 'https'] })).required(),
    planets: Joi.array().items(Joi.string().uri({ scheme: ['http', 'https'] })).required(),
    starships: Joi.array().items(Joi.string().uri({ scheme: ['http', 'https'] })).required(),
    vehicles: Joi.array().items(Joi.string().uri({ scheme: ['http', 'https'] })).required(),
    species: Joi.array().items(Joi.string().uri({ scheme: ['http', 'https'] })).required(),
    created: Joi.string().isoDate().required(),
    edited: Joi.string().isoDate().required(),
    url: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
  })
})

export default Joi.compile(filmSchema);