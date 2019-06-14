const axios = require('axios');

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, OATH_BITLY_TOKEN } = process.env;


module.exports = {
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;

        dbInstance.login_user([username, password])
        .then( results => {
            console.log(results)
            const response = results[0];
            req.session.user = {
                businessName: response.business_name,
                email: response.email,
                manager: response.manager,
                place_id: response.place_id,
                username: response.username,
                location_id: response.location_id
            }
            res.status(200).send(req.session.user)
        })
        
    },
    verify: (req, res, next) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(500).send('Please log in again.')
        }
    },
    getLastFiveReviews: (req, res, next) => {
        const { place_id } = req.session.user;
        const { GOOGLE_API_KEY } = process.env;

        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${ place_id }&fields=name,rating,review&key=${ GOOGLE_API_KEY }`)
        .then( results => {
            res.status(200).send(results.data.result)
        })
        .catch( err => {
            console.log(err)
        })
    },
    logout: (req, res, next) => {
        req.session.destroy();
    },
    sendMessage: (req, res, next) => {
        const { message, number } = req.body;
        client.messages
      .create({
         body: message,
         from: '+12085161808',
         to: number
       })
      .then(message => console.log(message.sid));
    },
    textInformation: (req, res, next) => {
        const location_id = req.session.user.location_id;
        res.status(200).send(`${location_id}`);
    },
    generateBitly: (req, res, next) => {
        const { long_url } = req.body;
        axios.get(`https://api-ssl.bitly.com/v3/link/lookup?url=${ encodeURIComponent(long_url) }&access_token=${ OATH_BITLY_TOKEN }`)
        .then( results => {
            res.status(200).send(results.data.data.link_lookup[0].aggregate_link)
        })
    },
    sendText: (req, res, next) => {
        const accountSid = TWILIO_ACCOUNT_SID;
        const authToken = TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        const { phoneNumber, message, image } = req.body;

        client.messages
        .create({
            body: message,
            from: TWILIO_PHONE_NUMBER,
            mediaUrl: image,
            to: phoneNumber
        })
        .then(message => console.log(message.sid))
    }
}