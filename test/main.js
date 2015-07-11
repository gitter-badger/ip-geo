var should = require('should');
var getIPgeo = require('../lib/main');

describe('Get IP information ',function(){
    describe('With empty IP', function () {
        it('returns an error',function(){
            getIPgeo.getInformationIPv4('',function(err, result){
                should.exists(err);
                should.not.exists(result);
            })
        });
    });
});



