const axios = require('axios');


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
                username: response.username
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
    }
}