
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


const SchemaSearchTv = Joi.object().keys({
    id: Joi.number().integer().required(),
    url: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    language: Joi.string().required(),
    genres: Joi.array().required(),
    status: Joi.string().required(),
    runtime: Joi.number().integer().required(),
    premiered: Joi.string().required(),
    officialSite: Joi.string().required(),
    schedule: Joi.object().keys({
        time: Joi.string().required(),
        days: Joi.array().required()
    }),
    rating: Joi.object().keys({
        average: Joi.number().required()
    }),
    weight: Joi.number().required(),
    network: Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string().required(),
        country: Joi.object().keys({
            name: Joi.string().required(),
            code: Joi.string().required(),
            timezone: Joi.string().required()    
        }),
    }),
    webChannel: Joi.string().allow(null).required(),
    externals: Joi.object().keys({
        tvrage: Joi.number().required(),
        thetvdb: Joi.number().required(),
        imdb: Joi.string().required()    
    }),
    image: Joi.object().keys({
        medium: Joi.string().required(),
        original: Joi.string().required(),
    }),
    summary: Joi.string().required(),
    updated: Joi.number().required(),
    _links: Joi.object().keys({
        self: Joi.object().keys({
            href: Joi.string().required(),
        }),
        previousepisode: Joi.object().keys({
            href: Joi.string().required(),
        }),
    }),
});

module.exports = {
    SchemaAirportSearchRadius,
    SchemaSearchTv
}
