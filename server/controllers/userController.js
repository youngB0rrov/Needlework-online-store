class UserController {
    async registration (req, res) {

    }

    async login(req, res) {

    }
    
    async checkAuth(req, res) {
        res.json({message: 'Working with controller'});
    }
}

module.exports = new UserController();