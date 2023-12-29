const Joi = require('joi')

const planetsSchema = Joi.object({

    count: Joi.number().required(),
    next: Joi.string().allow(null),
    previous: Joi.string().allow(null),
    results: Joi.array().items({
        name: Joi.string().required(),
        rotation_period: Joi.string().required(),
        orbital_period: Joi.string().required(),
        diameter: Joi.string().required(),
        climate: Joi.string().required(),
        gravity: Joi.string().required(),
        terrain: Joi.string().required(),
        surface_water: Joi.string().required(),
        population: Joi.string().required(),
        residents: Joi.array().items(Joi.string().uri()),
        films: Joi.array().items(Joi.string().uri()),
        created: Joi.string().required(),
        edited: Joi.string().required(),
        url: Joi.string().uri().required(),
    
    })

})

export default Joi.compile(planetsSchema);