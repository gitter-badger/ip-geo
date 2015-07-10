function getJSONInformationIPv4(ip,cb){
    var isIp = require('is-ip');
    if(typeof  ip == 'undefined'){
        cb(new Error('IP cannot be undefined'));
    }else if(!isIp.v4(ip)){
        cb(new Error('IP v4 is not valid'));
    }else{
        requestToGetIpInformation(ip,function(error,result){
            if(error){
                cb(error);
            }
            cb(null,result);
        });
        cb(null,result);
    }
}

module.exports = getJSONInformationIPv4;

function requestToGetIpInformation(ip,cb){
    var request = require('request');
    request('http://freegeoip.net/json/'+ip, function (error, response, body) {
        if(error){
            cb(error);
        }
        if (!error && response.statusCode == 200) {
            cb(null,body);
        }
    })
}
