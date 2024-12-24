
class UserController {

    // [POST] /user/register
    register(req, res) {
        res.status(200).json({message: 'register'});
    }

    // [POST] /user/login
    login(req, res) {
        res.status(200).json({message: 'login'});
    }
};

module.exports = new UserController();