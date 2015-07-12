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


describe('Check IPV4 ',function(){
    describe('With empty IPV4', function () {
        it('returns false',function(){
            should(getIPgeo.isIpV4('')).be.exactly(false);
        });
    });

    describe('With IPV6', function () {
        it('returns false',function(){
            should(getIPgeo.isIpV4('5800:10C3:E3C3:F1AA:48E3:D923:D494:AAFF')).be.exactly(false);
        });
    });

    describe('With invalid IP', function () {
        it('returns false',function(){
            should(getIPgeo.isIpV4('test')).be.exactly(false);
        });
    });

    describe('With valid IPV4', function () {
        it('returns true',function(){
            should(getIPgeo.isIpV4('127.0.0.1')).be.exactly(true);
        });
    });
});



describe('Check IPV6 ',function(){
    describe('With empty IPV6', function () {
        it('returns false',function(){
            should(getIPgeo.isIpV6('')).be.exactly(false);
        });
    });

    describe('With IPV4', function () {
        it('returns false',function(){
            should(getIPgeo.isIpV6('127.0.0.1')).be.exactly(false);
        });
    });

    describe('With invalid IP', function () {
        it('returns false',function(){
            should(getIPgeo.isIpV6('test')).be.exactly(false);
        });
    });

    describe('With valid IPV6', function () {
        it('returns true',function(){
            should(getIPgeo.isIpV6('5800:10C3:E3C3:F1AA:48E3:D923:D494:AAFF')).be.exactly(true);
        });
    });
});

