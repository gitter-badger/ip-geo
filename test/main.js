var should = require('should');
var getJSONInformationIPv4 = require('../lib/main');

describe('getJSONInformationIPv4', function () {
   describe('With empty IP', function () {
     it('returns an error',function(){
         getJSONInformationIPv4('',function(err, result){
             should.exists(err);
             should.not.exists(result);
         })
     });
   });

    describe('With Google IP', function () {
        it('returns a result',function(){
            getJSONInformationIPv4('64.233.167.94',function(err, result){
                should.not.exists(err);
            })
        });
    });
});



