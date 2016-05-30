// Get proposals  
Meteor.publish("getProposals", function () {
  return Proposals.find({'createdBy' : this.userId}, {sort : {createdAt : -1}});
});


Meteor.publish("getProposalById", function (id) {
  return Proposals.find({'createdBy' : this.userId, "_id" : id}, {sort : {createdAt : -1}});
});