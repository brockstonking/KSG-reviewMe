const axios = require('axios');

module.exports = {
    registerBusinessName: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { businessName } = req.body;

        dbInstance.register_business_name([businessName])
        .then( results => {
            res.status(200).send(results[0])
        })
    },
    registerUser: (req, res, next) => {
        debugger
        const dbInstance = req.app.get('db');
        const { username, password, firstName, lastName, email, manager, business_id } = req.body;

        dbInstance.register_user([username, email, password, manager ? 'true' : 'false', business_id, firstName, lastName])
        .then( results => {
            res.status(200).send(results)
        })
    }
}