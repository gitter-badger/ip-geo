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

    describe('With Orange IPV4', function () {
        it('returns a result',function(){
            this.timeout(10000);
            getIPgeo.getInformationIPv4('81.52.142.217',function(err, result){
                should.not.exists(err);
                should.exists(result);
            })
        });
    });

    describe('With Free IPV4', function () {
        it('returns a valid object',function(){
            this.timeout(10000);
            getIPgeo.getInformationIPv4('81.52.142.217',function(err, result){
                result.should.have.property('ip');
                result.should.have.property('country_code');
                result.should.have.property('country_name');
                result.should.have.property('region_code');
                result.should.have.property('region_name');
                result.should.have.property('zip_code');
                result.should.have.property('time_zone');
                result.should.have.property('latitude');
                result.should.have.property('longitude');
                result.should.have.property('metro_code');
            })
        });
    });
});



