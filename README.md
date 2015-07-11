DEV [![Build Status](https://travis-ci.org/damienmarchandfr/ip-geo.svg?branch=dev)](https://travis-ci.org/damienmarchandfr/ip-geo)
PROD [![Build Status](https://travis-ci.org/damienmarchandfr/ip-geo.svg?branch=master)](https://travis-ci.org/damienmarchandfr/ip-geo)

![Logo IP-GEO](http://img11.hostingpics.net/pics/720136geoip.png)


#IP GEO#

Get geolocation information from an IPV4 or IPV6.

##Install##

    npm install ip-geo --save



##Usage##

    var ipGeo = require('ip-geo');
	var objectInformation = ipGeo.getObjectInformationIPv4('8.8.8.8');


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