


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
    }
}