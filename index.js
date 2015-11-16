'use strict';

// Load modules


// Declare internals

var internals = {};


exports.register = function (server, options, next) {

    var bindOptions = {
        someoption: options.someoption
    };

    server.bind(bindOptions);

    var route = {
        method: 'GET',
        path: '/justatest',
        handler: function (request, reply) {

            reply(this.someoption);
        }
    };

    server.route(route);

    next();
};


exports.register.attributes = {
    pkg: require('./package.json')
};
