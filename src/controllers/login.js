const User = require('../model/user');
const Helper = require('../middleware/helper/common');
const { validate } = require('../validator/index');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const login = async (req, res) => {
    try {
        const parameters = req.body;
        const validation = await validate(parameters, 'login');

        let { email, mobile, password } = validation;

        const userDetails = await User.findOne({ mobile });

        if (!userDetails) {
            return res.status(200).send({ status: false, message: "User does not exists" });
        }

        let userPassword = userDetails.password;

        const isPasswordMatched = await Helper.comparePassword(password, userPassword);

        if (!isPasswordMatched) {
            return res.status(200).send({ status: false, message: 'Incorrect password' });
        }

        const accessToken = jwt.sign(
            { _id: userDetails._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )


        const updatedUserDetail = await User.findOneAndUpdate(
            { _id: userDetails._id }, //filter
            { loginAction: 'login', token: accessToken }, //update
            { new: true } // get document after updated
        )

        console.log(updatedUserDetail)


        const data = {
            _id: userDetails._id,
            name: userDetails.name,
            email: userDetails.email,
            mobile: userDetails.mobile,
            token: accessToken
        }

        console.log(data)

        return res.status(200).send({ status: true, token: accessToken });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: false, message: error.message })
    }

}




module.exports = { login }




