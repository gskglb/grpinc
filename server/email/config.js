Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@sandbox6e5c584d6a8e4408ba0cd700ce32f461.mailgun.org',
    password: '8fbfa8a7a6eeb8bfdd65d10bddd5e6ed'
  });

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      this.unblock();

      Meteor.Mailgun.send({
        to: 'guru4raj@gmail.com',
        from: name + ' <' + email + '>',
        subject: 'New Contact Form Message',
        text: message,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    }
  });
});
