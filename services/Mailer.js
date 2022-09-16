const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
    constructor({ subject, recipients }, content){
        super();

        this.sgAPI = sendgrid(keys.sendGridKey)

        this.from_email = new helper.Email('xiaoxiaxia88@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recepients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
          return new helper.Email(email);
        });
      }
    
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.clickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients(){
        const personalize = new helper.Personalization();
        this.recepients.forEach(recepient => {
            personalize.addTo(recepient);
        });
        this.Personalization(personalize);
    }


    async send(){
        const request = this.sgAPI.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
    const response = this.sgAPI.API(request);
    return response;
    }
}

module.exports = Mailer