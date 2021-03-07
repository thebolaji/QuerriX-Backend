/* eslint-disable class-methods-use-this */
const AuthServ = require('../services/auth.service');
const response = require('../utils/response');

class AuthContoller {
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

  async RequestEmailVerification(req, res) {
    const result = await AuthServ.RequestEmailVerification(req.query.email);
    res.status(200).json(response('Email verfication link sent', result));
  }

  async VerifyEmail(req, res) {
    const result = await AuthServ.VerifyEmail(req.body);
    res.status(200).json(response('Email verified successfully', result));
  }

  async RequestPasswordReset(req, res) {
    const result = await AuthServ.RequestPasswordReset(req.query.email);
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