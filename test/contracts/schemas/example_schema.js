
'use strict';

const Joi = require('joi');

const SchemaAirportSearchRadius = Joi.array().items(Joi.object().keys({
    airportId: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required(),
    location: Joi.object().keys({
        longitude: Joi.number(),
        latitude: Joi.number()}),
    cityId: Joi.string().required(),
    city: Joi.string().required(),
    countryCode: Joi.string().required(),
    themes: Joi.array().required(),
    pointsOfSale: Joi.array().required()
}));

module.exports = {
    SchemaAirportSearchRadius
}
