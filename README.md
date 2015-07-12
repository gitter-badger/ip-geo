DEV [![Build Status](https://travis-ci.org/damienmarchandfr/ip-geo.svg?branch=dev)](https://travis-ci.org/damienmarchandfr/ip-geo)

![Logo IP-GEO](http://img11.hostingpics.net/pics/233012geoip.png)


#IP GEO#

Get geolocation information from an IPV4 or IPV6.

##Install##

    npm install ip-geo --save



##Usage##

    var ipGeo = require('ip-geo');

	//--------------IP V4--------------
	var ipV4 = '8.8.8.8';
	
	if(ipGeo.isIpV4(ipV4)){
	    ipGeo.getObjectInformationIPv4(ipV4,function(err,result){
        				if(err){
        					console.error(err);
        				}
        				console.log(result);
        }
	}
	
	
	//--------------IP V6--------------
	var ipV6 = '5800:10C3:E3C3:F1AA:48E3:D923:D494:AAFF';
	
	if(ipGeo.isIpV6(ipV6)){
    	    ipGeo.getObjectInformationIPv6(ipV6,function(err,result){
            				if(err){
            					console.error(err);
            				}
            				console.log(result);
            }
    	}


##Information##

**Country code**

	objectInformation.country_code

**Country name** 

	objectInformation.country_name

**Region code**

	objectInformation.region_code

**Region name**

	objectInformation.region_name

**City**

    objectInformation.city

**Zip code**

	objectInformation.zip_code

**Time zone**

	objectInformation.time_zone

**Latitude**

	objectInformation.latitude

**Longitude**

	objectInformation.longitude

**Metro code**

	objectInformation.metro_code