'use strict';

// Load modules

var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var Service = require('../');


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Plugin tests', function () {

    it('loads plugins and hits route', function (done) {

        var server = new Hapi.Server();
        server.connection();

        var serviceOptions = {
            someoption: 'Weeeeeeee'
        };

        server.register({ register: Service, options: serviceOptions }, function (err) {

            expect(err).to.not.exist();

            server.start(function () {

                var injectOptions = {
                    url: '/justatest',
                    method: 'GET'
                };

                server.inject(injectOptions, function (res) {

                    expect(res).to.exist();
                    expect(res.result).to.exist();
                    expect(res.result).to.equal(serviceOptions.someoption);

                    done();
                });
            });
        });
    });
});
