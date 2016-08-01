Meteor.startup(function() {

	if (ServiceProvider.find().count() === 0 ) {

	    console.log('STARTUP CODE : Creating demo serviceProviders');

	    var serviceProviders = [
	        {name:"ABC1 Service Provider India Pvt. Ltd.",address:"#101, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abc1serviceprovider.com"},
	        {name:"ABC2 Service Provider India Pvt. Ltd.",address:"#201, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abc2serviceprovider.com"},
	        {name:"ABC3 Service Provider India Pvt. Ltd.",address:"#301, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abc3serviceprovider.com"},
	        {name:"ABC4 Service Provider India Pvt. Ltd.",address:"#401, Kondapur, Hitech City, Cyberabad, Hyderabad",url:"http://abccserviceprovider.com"},
	      ];

	    _.each(serviceProviders, function (demoData) {

	      ServiceProvider.insert({
	        name: demoData.name,
	        address: demoData.address,
	        url:demoData.url, 
	      });
    	
	    });
	    console.log("STARTUP CODE : Demo ServiceProvider Details added");
	}else{
		console.log("STARTUP CODE : Demo ServiceProvider Details found in the system. No action");
	}
});