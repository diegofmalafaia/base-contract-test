
'use strict';
const request = require('supertest');
const expect = require('chai').expect;
const joiAssert = require('joi-assert');

const {
    SchemaAirportSearchRadius, SchemaSearchTv
} = require('../schemas/example_schema');

// const URL = '';
// const PATH = '';

describe('Examples of contract tests using Joi Assert and Mocha', () => {     
    it('Example of get request', function (done) {
        request('https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/')
          .get('by-radius?radius=50&lng=-157.895277&lat=21.265600')
          .set('X-RapidAPI-Host', 'cometari-airportsfinder-v1.p.rapidapi.com')
          .set('X-RapidAPI-Key', '8d3a50857amshcf16e42fbc83c12p1646ebjsn20121bd14040')
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            expect(res.status).to.be.eql(200);
            joiAssert(res.body, SchemaAirportSearchRadius);
            done(err);
          })
      });

      it.only('get TV Show content', function (done) {
        request('https://tvjan-tvmaze-v1.p.rapidapi.com/')
        .get('shows/2')
        .set("X-RapidAPI-Host", "tvjan-tvmaze-v1.p.rapidapi.com")
        .set("X-RapidAPI-Key", "8d3a50857amshcf16e42fbc83c12p1646ebjsn20121bd14040")
        .expect('Content-Type', /json/)
          .end(function (err, res) {
            expect(res.status).to.be.eql(200);
            joiAssert(res.body, SchemaSearchTv);
            done(err);
          })
      });
  });