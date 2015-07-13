
module.exports = {


    getInformationIPv4 : function(ip,cb){
    var isIp = require('is-ip');
    if(typeof  ip == 'undefined'){
        cb(new Error('IP cannot be undefined'));
    }else if(!isIp.v4(ip)){
        cb(new Error('IP v4 is not valid'));
    }else{
        requestToGetIpInformation(ip,function(error,result){
            if(error){
                cb(error,null);
            }
            var object = {};
            try{
                object = JSON.parse(result);
            }catch(parseError){
                cb(new Error('Cannot parse the response.'), null);
            }
            cb(null,object);
        });
    }
},

    getInformationIPv6 : function(ip,cb){
        var isIp = require('is-ip');
        if(typeof  ip == 'undefined'){
            cb(new Error('IP cannot be undefined'));
        }else if(!isIp.v6(ip)){
            cb(new Error('IP v6 is not valid'));
        }else{
            requestToGetIpInformation(ip,function(error,result){
                if(error){
                    cb(error,null);
                }
                var object = {};
                try{
                    object = JSON.parse(result);
                }catch(parseError){
                    cb(new Error('Cannot parse the response.'), null);
                }
                cb(null,object);
            });
        }
    },

    isIpV4 : function (ip) {
        var isIp = require('is-ip');
        if(typeof  ip == 'undefined' || !isIp.v4(ip)){
            return false;
        }else{
            return true;
        }
    },

    isIpV6 : function (ip) {
        var isIp = require('is-ip');
        if(typeof  ip == 'undefined' || !isIp.v6(ip)){
            return false;
        }else{
            return true;
        }
    }
}


//--------------private---------------------

function requestToGetIpInformation(ip,cb){
    var request = require('sync-request');
    var res = request('GET', 'https://freegeoip.net/json/'+ip);

    if(res.statusCode > 300){
        cb(new Error('Cannot get information from this ip : '+ip),null);
    }
    cb(null,res.body);
}

