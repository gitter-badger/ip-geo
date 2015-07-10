var should = require('should');
var getIPgeo = require('../lib/main');

describe('getJSONInformationIPv4', function () {
   describe('With empty IP', function () {
     it('returns an error',function(){
         getIPgeo.getJSONInformationIPv4('',function(err, result){
             should.exists(err);
             should.not.exists(result);
         })
     });
   });

    describe('With Google IP', function () {
        this.timeout(10000);
        it('returns a result',function(){
            getIPgeo.getJSONInformationIPv4('64.233.167.94',function(err, result){
                should.not.exists(err);
                should.exists(result);
            })
        });
    });
});

describe('Get IP information object',function(){
    describe('With empty IP', function () {
        it('returns an error',function(){
            getIPgeo.getObjectInformationIPv4('',function(err, result){
                should.exists(err);
                should.not.exists(result);
            })
        });
    });

    describe('With Google IP', function () {
        it('returns a result',function(){
            this.timeout(10000);
            getIPgeo.getObjectInformationIPv4('64.233.167.94',function(err, result){
                should.not.exists(err);
                should.exists(result);
            })
        });
    });

    describe('With Google IP', function () {
        it('returns a valid object',function(){
            this.timeout(10000);
            getIPgeo.getObjectInformationIPv4('64.233.167.94',function(err, result){
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



