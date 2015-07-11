var should = require('should');
var getIPgeo = require('../lib/main');

describe('Get IPV4 information ',function(){
    describe('With empty IPV4', function () {
        it('returns an error',function(){
            getIPgeo.getInformationIPv4('',function(err, result){
                should.exists(err);
                should.not.exists(result);
            })
        });
    });

    describe('With invalid IPV4', function () {
        it('returns an error',function(){
            getIPgeo.getInformationIPv4('23.ezr.4z.e',function(err, result){
                should.exists(err);
                should.not.exists(result);
            })
        });
    });
});

describe('Get IPV6 information ',function(){
    describe('With empty IPV6', function () {
        it('returns an error',function(){
            getIPgeo.getInformationIPv6('',function(err, result){
                should.exists(err);
                should.not.exists(result);
            })
        });
    });

    describe('With invalid IPV6', function () {
        it('returns an error',function(){
            getIPgeo.getInformationIPv6('23.ezr.4z.e',function(err, result){
                should.exists(err);
                should.not.exists(result);
            })
        });
    });
});



