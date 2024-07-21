const Employee = require('../db/employeeModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Remove or comment out the following lines as they are related to OTP functionalities
// const { transporter, generateOtp } = require('../utils/sendOtp');
// const { sendOTPTemplate } = require('../html-template/send-otp-template');
// const { sendMail } = require('../send-in-blue');
const saltRounds = 10;

exports.login = async (req, res) => {
    // Function remains unchanged
}

exports.Signup = async (req, res) => {
    // Remove OTP-related code and logic
}

exports.signup = async (req, res) => {
    // Remove OTP-related code and logic
};

exports.signup = async (req, res) => {
    // Remove OTP-related code and logic
};

exports.employeeDetails = async (req, res) => {
    // Function remains unchanged
};

exports.updateEmployee = async (req, res) => {
    // Function remains unchanged
};

exports.deleteEmployee = async (req, res) => {
    // Function remains unchanged
};

exports.getAllEmployees = async (req, res) => {
    // Function remains unchanged
};

exports.getEmployeesCount = async (_, res) => {
    // Function remains unchanged
};

exports.signup = async (req, res) => {
    // Remove OTP-related code and logic
};

exports.resetPassword = async (req, res) => {
    // Remove OTP-related code and logic
};
