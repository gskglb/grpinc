Meteor.startup(function() {

	// Flush all data first
	console.log('Step 1 : Flushing all data');
	CompanyDetails.remove({});
	Users.remove({});
	ServiceProvider.remove({});
	CompanyInbox.remove({});
	Proposals.remove({});
	EmpDetailsAttach.remove({});
	PreviousClaimsHistory.remove({});
	console.log('Step 1 : Done');

	// Add demo data
	console.log('Step 2 : Adding Company Details');
    var clients = [
    {name:"HSBC Software Development India Pvt. Ltd.",address:"Laxmi Cyber City, Hitech City, Cyberabad, Hyderabad",url:"http://hsbc.co.in"},
    {name:"Infosys India Pvt. Ltd.",address:"#201, Raheja Mindspace, Hitech City, Cyberabad, Hyderabad",url:"http://infy.com"},
    {name:"Parimala AppLabs",address:"#201, Vaishnavi's Lakshmi Residency, Near Silver Oak's, Bachupally, Hyderabad",url:"http://superguru.co"},
    {name:"Tata Consultancy Services",address:"#401, EPark, Near Kothaguda Circle, Kondapur, Hyderabad",url:"http://tcs.com"},
  	];

  	var cid = null;
	_.each(clients, function (demoData) {
		cid = CompanyDetails.insert({
		name: demoData.name,
		address: demoData.address,
		url:demoData.url, 
		});
	});

	console.log('Step 2 : Done' + cid);
	console.log('Step 3 : Adding demo users');
	var users = [
        {name:"Administrator",		email:"parimala.applabs@gmail.com",		roles:['admin']},
        {name:"Proposal Creator",	email:"creator@example.com",	roles:['create']},
        {name:"Proposal Reviewer",	email:"reviewer@example.com",	roles:['reviewer']},
	];

    var comp = CompanyDetails.findOne({_id:cid});

    _.each(users, function (userData) {
      var id,user;
      id = Accounts.createUser({
        email: userData.email,
        password: "test123",
        profile: { name: userData.name },
      });

    const organization = {
    	id : comp._id,
    	name : comp.name,
    	url : comp.url,
      type : 0,
	}
	
    Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true, 'organization' : organization}});
    Roles.addUsersToRoles(id, userData.roles);
    });
    console.log('Step 3 : Done');

 	  console.log('Step 4 : Creating demo serviceProviders');
    var serviceProviders = [
        {name:"HDFC Ergo Group Insurance", address:"HDFC ERGO General Insurance Company Ltd. 6th Floor, Leela Business Park, Andheri Kurla Road, Andheri (E), Mumbai - 400 059",url:"https://www.hdfcergo.com/"},
        {name:"ICICI Prudential Life Insurance",address:" ICICI Pru Life Towers, 1089 Appasaheb Marathe Marg, Prabhadevi, Mumbai 400025",url:"https://www.iciciprulife.com/group-insurance.html"},
        {name:"Bajaj Allianz Life Insurance Company Ltd",address:"GE Plaza, Airport Road, Yerawada, Pune 411 006, Maharashtra",url:"https://www.bajajallianzlife.com/group-insurance.jsp"},
        {name:"Tata AIG Insurance",address:"Peninsula Business Park, Tower A, 15th Floor, G.K. Marg, Lower Parel, Mumbai",url:"http://www.tataaiginsurance.in/corporate-insurance/"},
      ];

    _.each(serviceProviders, function (demoData) {

      ServiceProvider.insert({
        name: demoData.name,
        address: demoData.address,
        url:demoData.url, 
      });
	
    });
	 console.log('Step 4 : Done');
    
    console.log('Step 5 : Adding service representatives account');
    var serviceUsers = [
          {name:"HDFC Representative",    email:"service1@example.com",   roles:['service_provider']},
          {name:"ICICI Representative", email:"service2@example.com",  roles:['service_provider']},
          {name:"Bajaj Representative",  email:"service3@example.com", roles:['service_provider']},
          {name:"TataAIG Representative",  email:"service4@example.com", roles:['service_provider']},
    ];

    _.each(serviceUsers, function (userData) {
      var id,user;
      id = Accounts.createUser({
        email: userData.email,
        password: "test123",
        profile: { name: userData.name },
      });

      switch(userData.email) {
        case "service1@example.com" : 
          key = "HDFC";
          break;
        case "service2@example.com" : 
          key = "ICICI";
          break;
        case "service3@example.com" : 
          key = "Bajaj";
          break;
        case "service4@example.com" : 
          key = "Tata";
          break;    
      }

      console.log("Looking for " + key + " for " + userData.email);
      var serv = ServiceProvider.findOne({name:{'$regex':key}});  
      const organization = {
        id : serv._id,
        name : serv.name,
        url : serv.url
      }
    
      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true, 'organization' : organization}});
      Roles.addUsersToRoles(id, userData.roles);
    });
      console.log('Step 5 : Done');


});