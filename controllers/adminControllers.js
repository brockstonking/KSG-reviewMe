const axios = require('axios');

module.exports = {
    registerBusinessName: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { businessName } = req.body;

        dbInstance.register_business_name([businessName])
        .then( results => {
            res.status(200).send(results[0])
        })
    }
}