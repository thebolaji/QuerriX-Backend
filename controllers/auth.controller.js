/* eslint-disable class-methods-use-this */
const AuthServ = require('../services/auth.service');
const response = require('../utils/response');

class AuthContoller {
  async RequestSignupLink(req, res) {
    const result = await AuthServ.RequestSignupLink(req.body.email);
    res
      .status(200)
      .json(response('A link has been sent to your email', result));
  }

  async signup(req, res) {
    const result = await AuthServ.signup(req.body);
    res.status(201).json(response('User created', result));
  }

  async signin(req, res) {
    const result = await AuthServ.signin(req.body);
    res.status(200).json(response('User login successful', result));
  }

  async updatePassword(req, res) {
    const result = await AuthServ.updatePassword(req.params.userId, req.body);
    res.status(200).json(response('Password updated', result));
  }

  async RequestPasswordReset(req, res) {
    const result = await AuthServ.RequestPasswordReset(req.body.email);
    res
      .status(200)
      .json(response('Password reset link sent to your mail', result));
  }

  async resetPassword(req, res) {
    const result = await AuthServ.resetPassword(req.body);
    res.status(200).json(response('Password updated', result));
  }
}

module.exports = new AuthContoller();
