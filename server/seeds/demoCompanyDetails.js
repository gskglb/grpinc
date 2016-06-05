Meteor.startup(function() {

	if (CompanyDetails.find().count() === 0 ) {

	    console.log('STARTUP CODE : Creating demo users');

	    var clients = [
	        {name:"ABC1 Coporation India Pvt. Ltd.",address:"#101, Raheja Mindspace, Hitech City, Cyberabad, Hyderabad",url:"http://abc1corp.com"},
	        {name:"ABC2 Coporation India Pvt. Ltd.",address:"#201, Raheja Mindspace, Hitech City, Cyberabad, Hyderabad",url:"http://abc2corp.com"},
	        {name:"ABC3 Coporation India Pvt. Ltd.",address:"#301, Raheja Mindspace, Hitech City, Cyberabad, Hyderabad",url:"http://abc3corp.com"},
	        {name:"ABC4 Coporation India Pvt. Ltd.",address:"#401, Raheja Mindspace, Hitech City, Cyberabad, Hyderabad",url:"http://abcc4orp.com"},
	      ];

	    _.each(clients, function (demoData) {

	      CompanyDetails.insert({
	        name: demoData.name,
	        address: demoData.address,
	        url:demoData.url, 
	      });
    	
	    });
	    console.log("STARTUP CODE : Demo Company Details added");
	}else{
		console.log("STARTUP CODE : Demo Company Details found in the system. No action");
	}
});