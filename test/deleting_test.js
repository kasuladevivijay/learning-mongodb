/**
 * Deleting records in mongodb can be done in the following ways
 * 1. modelInstance.remove()
 * 2. Model.remove()
 * 3. Model.findOneAndRemove()
 */
const assert = require('assert');
const JusticeLeagueChar = require('../models/justice-league');

describe('Deleting Records...', () => {
    var jlChar;
    beforeEach((done) => {
        jlChar = new JusticeLeagueChar({
            name: 'Superman',
            power: 99
        });
        jlChar.save().then(function () {});
        done();
    });

    it('should delete one record from the db...', (done) => {
        JusticeLeagueChar.findOneAndRemove({
            name: 'Superman'
        }).then(() => {
            JusticeLeagueChar.findOne({
                name: 'Superman'
            }).then((result) => {
                assert(result.name === null);
            });
        });
        done();
    });
});