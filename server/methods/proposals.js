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


  }

});