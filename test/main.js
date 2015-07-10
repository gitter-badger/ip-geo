var should = require('should');
var getJSONInformationIPv4 = require('../lib/main');

describe('getJSONInformationIPv4', function () {
   describe('With invalid IP', function () {
     it('returns an error',function(){
         getJSONInformationIPv4('',function(err, result){
             should.exist(err);
         })
     });
   });
});



