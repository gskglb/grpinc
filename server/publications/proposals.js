// Get proposals  
Meteor.publish("getProposals", function () {
  return Proposals.find({'createdBy' : this.userId}, {sort : {createdAt : -1}});
});