const axios = require('axios');

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, OATH_BITLY_TOKEN } = process.env;


module.exports = {
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;

        dbInstance.login_user([username, password])
        .then( results => {
            const response = results[0];
            req.session.user = {
                businessName: response.business_name,
                email: response.email,
                manager: response.manager,
                place_id: response.place_id,
                username: response.username,
                location_id: response.location_id,
                user_id: response.user_id,
                business_id: response.business_id
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
    textInformation: (req, res, next) => {
        const location_id = req.session.user.location_id;
        res.status(200).send(`${location_id}`);
    },
    sendTextTest: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const accountSid = TWILIO_ACCOUNT_SID;
        const authToken = TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        const { location_id, firstName, lastName, phoneNumber  } = req.body;

        dbInstance.get_message_info([location_id])
        .then( results => {
            const imageURL = results[0].image_url; 
            const messageBase = results[0].text_message;


            const messageDateClass = new Date();
            const messageDate = messageDateClass.getMonth() + 1 + '/' + messageDateClass.getDate() + '/' + messageDateClass.getFullYear();
            dbInstance.add_message_to_history([firstName, lastName, phoneNumber, req.session.user.user_id, 'Unopened', location_id, messageDate, messageDateClass.getMonth() + 1, messageDateClass.getFullYear()])
                .then( results => {
                    const messageId = results[0].message_id;
                    // const long_url = `https://927b28f3.ngrok.io/feedback/${ messageId }` The below is for dev purpose only
                    const long_url = 'https://www.google.com';
                    const link = `https://api-ssl.bitly.com/v3/link/lookup?url=${ encodeURIComponent(long_url) }&access_token=${ OATH_BITLY_TOKEN }`
                    axios.get(link)
                    .then( results => {
                        // const bitlyLink = results.data.data.link_lookup[0].aggregate_link; the below is for dev purposes only
                        const bitlyLink = `https://8be91ea9.ngrok.io/feedback/${ messageId }`
                        const message = `Hello ${ firstName },\n\n` + messageBase + `\n\n${ bitlyLink }`;

                        client.messages
                        .create({
                            body: message,
                            from: TWILIO_PHONE_NUMBER,
                            mediaUrl: imageURL,
                            to: '+1' + phoneNumber
                        })
                        .then(message => {
                            console.log(message.sid);
                            res.status(200).send('Message sent')
                        })
                    })
                })
        })
    },
    getLastTenMessages: (req, res, next) => {
        const dbInstance = req.app.get('db');

        if (req.session.user.manager === 'true') {
            dbInstance.get_business_messages([req.session.user.business_id])
            .then( results => {
                res.status(200).send(results)
            })
            .catch( err => {
                res.status(500).send(err)
            })
        } else {
            dbInstance.get_user_messages([req.session.user.user_id])
            .then( results => {
                res.status(200).send(results)
            })
            .catch( err => {
                res.status(500).send(err)
            })
        }
    },
    getSession: (req, res, next) => {
        res.status(200).send(req.session.user)
    },
    getAllSent: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { currentYear } = req.body;
        const lastYear = currentYear - 1

        dbInstance.get_message_graph_sent([currentYear, lastYear, req.session.user.business_id])
        .then( results => {
            res.status(200).send(results)
        }
        )
    },
    test: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.test()
        .then( results => {
            console.log(results[0].message_id)
        })
    },
    getFeedbackInfo: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { message_id } = req.body;

        dbInstance.get_feedback_info([message_id])
        .then( results => {
            dbInstance.mark_message_opened([message_id])
            res.status(200).send(results)
        })
    },
    thumbsDown: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { message_id } = req.body;
        dbInstance.mark_message_thumbs_down([message_id])
    },
    thumbsUp: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { message_id } = req.body;
        dbInstance.mark_message_thumbs_up([message_id])
    }
}