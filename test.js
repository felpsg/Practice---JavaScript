console.log = function() {}
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.\n').to.equal(false);
        }
        let spaceship
        try {
            spaceship = appModule.__get__("spaceship");
        } catch (e) {
            expect(true, 'Did you accidentally delete the `spaceship` object?\n').to.equal(false);
        }
        let passengers = spaceship.passengers
        expect(passengers, 'Did you change the `passengers` property on the `spaceship` object to be an array?').to.be.an('array');

        let firstPass = spaceship.passengers[0]
        expect(firstPass, 'Does the `passengers` array contain at least one passenger object?').to.be.an('object');
    });
});
