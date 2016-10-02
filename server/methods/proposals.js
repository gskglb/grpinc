Meteor.methods({
  deleteProposal: function(proposalId) {
  	if(!proposalId){
  		throw new Meteor.Error("Proposal ID is needed for delete");
  	}
  	Proposals.remove({_id : proposalId});
    console.log("Proposal deleted " + proposalId);
  },

  submitForReview : function(proposalId){
  	if(!proposalId){
  		throw new Meteor.Error("Proposal ID is needed");
  	}

  	// 1. change the proposal status to pending review
    Proposals.update({_id : proposalId}, {$set : {status : "Pending Review"}});

  	// 2. generate a task for reviewers	
    var proposal = Proposals.findOne(proposalId);
    if(!proposal || proposal === "undefined"){
      throw new Meteor.Error("Proposal not found for " + proposalId);
    }
    console.log(proposal.refNo);
    CompanyInbox.insert({
      refNo : proposal.refNo,
      companyId : proposal.companyId,
      desciption : "Proposal pending for review",
      status : "Open",
      url : proposal._id,
      type : "Original"
    }, function(error, result){
      if(error){
        console.log("Error " + error);
        throw new Meteor.Error("Server error encountered.");
      }
    });
    console.log("Proposal submitted for review  " + proposalId);  	
  },

  approveProposalForPublish : function(proposalId){
    // 1. change the proposal status to pending publish
    Proposals.update({_id : proposalId}, {$set : {status : "Pending Publish"}});

    // 2. Remove the task for reviewers 
    var proposal = Proposals.findOne(proposalId);
    if(!proposal || proposal === "undefined"){
      throw new Meteor.Error("Proposal not found for " + proposalId);
    }
    //console.log(proposal.refNo);
    CompanyInbox.remove({refNo : proposal.refNo});
    console.log("Proposal is ready for publish  " + proposalId);    
    Notifications.insert({
      refNo : proposal.refNo,
      url : proposal._id,
      to : proposal.createdBy,
      type : "danger",
      message : "Proposal is approved for publish",
      comments : ""
    }, function(error, result){
      if(error){
        console.log("Error " + error);
        throw new Meteor.Error("Server error encountered.");
      }      
    });

  },

  rejectProposalForPublish : function(proposalId, rejectionComment){
    // 1. change the proposal status to draft
    Proposals.update({_id : proposalId}, {$set : {'status' : "Draft", 'rejectionComments' : rejectionComment}});

    // 2. Remove the task for reviewers 
    var proposal = Proposals.findOne(proposalId);
    if(!proposal || proposal === "undefined"){
      throw new Meteor.Error("Proposal not found for " + proposalId);
    }
    //console.log(proposal.refNo);
    CompanyInbox.remove({refNo : proposal.refNo});
    console.log("Proposal " + proposalId + " is rejected from publishing with remark " +  rejectionComment);    

    // 3. Send a notification to creater about the proposal rejection with comments
    Notifications.insert({
      refNo : proposal.refNo,
      url : proposal._id,
      to : proposal.createdBy,
      type : "danger",
      message : "Proposal is rejected",
      comments : rejectionComment
    }, function(error, result){
      if(error){
        console.log("Error " + error);
        throw new Meteor.Error("Server error encountered.");
      }      
    });

  },

  publishProposal : function(proposalId, selectedServiceProviderList){
    // 1. Update proposal for status = Published and publishedToServiceProvider = list from session
    Proposals.update({_id : proposalId}, {$set : {'status' : "Published", 'publishedTo' : selectedServiceProviderList}});
    
    // 2. Update Service providers with new request
    this.unblock();
   
    var proposal = Proposals.findOne(proposalId);
    ids = _.pluck(selectedServiceProviderList, "_id");
   
    _.each(ids, function(id){
      console.log("Adding task for " + id);
      CompanyInbox.insert({
        refNo : proposal.refNo,
        companyId : id,
        desciption : "Proposal pending your response",
        status : "Open",
        url : proposalId,
        type : "Service"
      }, function(error, result){
        if(error){
          console.log("Error " + error);
          throw new Meteor.Error("Server error encountered.");
        }
      });

    });

    var name = "GroupAssurance";
    var email = "parimala.applabs@gmail.com";
    var message = "<Testing>New Proposal is published";
      Meteor.Mailgun.send({
        to: 'guru4raj@gmail.com',
        from: name + ' <' + email + '>',
        subject: 'New Proposal awaiting your response',
        text: message,
        html: Handlebars.templates['proposalPublishEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
  },

});