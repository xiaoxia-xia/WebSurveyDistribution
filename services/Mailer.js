const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
    constructor({ subject, recepients }, content){
        super();
        this.from_email = new helper.Email('no-reply@emialy.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recepients = this.formatAddresses(recepients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recepients){
        return recepients.map(( {email} ) => {
            return new helper.Email(email);
        });
    }

    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.clickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }
}

module.exports = Mailer