const express = require('express');
const employeeControllers = require('../Controllers/employeeControllers');
const verifyToken = require('../Middilewares/jwt_auth');
const checkLoginData = require('../Middilewares/checkLogin');
const checkOtpData = require('../Middilewares/checkOTP');
const router = express.Router();

router.route('/login').post(checkLoginData, employeeControllers.login);

router.route('/signup/send-otp').post(employeeControllers.signup);

router.route('/signup/resend-otp/:id').post(employeeControllers.signup);

router.route('/signup').post(employeeControllers.signup);

router.route('/resetPassword').post(employeeControllers.resetPassword);

router.route('/employeeDetails').get(verifyToken, employeeControllers.employeeDetails);

router.route('/updateEmployee').post(verifyToken, employeeControllers.updateEmployee);

router.route('/deleteEmployee').delete(verifyToken, employeeControllers.deleteEmployee);

router.route('/allEmployees').get(verifyToken, employeeControllers.getAllEmployees);

router.route('/employees-count').get(verifyToken, employeeControllers.getEmployeesCount);

module.exports = router;
