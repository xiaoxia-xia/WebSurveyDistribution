const keys = require('../config/keys');
const stripe = require('stripe')('sk_test_51Le4PDErNSJvU9qbO8eckkuTmW8dK3hyWXDaymyKR9d8p4SxcVT4szsUbpciN5DCSw5nv6j4HXmtfuZVE7c2jNFD00t3bYR61X');
// I have to use the string here, otherwise if using keys.stripeSecretKey will have 504 error
const requireLogin = require('../middlewares/requireLogin')



module.exports = app =>{
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credit',
            source: req.body.id
        });
        req.user.credits += 5;
        const user = await req.user.save();
        
        res.send(user);
    });
};