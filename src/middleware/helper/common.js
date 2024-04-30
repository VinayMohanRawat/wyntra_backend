const bcrypt = require('bcrypt');
const User = require('../../model/user');

const Helper = {
    securePassword: async function (password) {
        //genSalt
        const salt = await bcrypt.genSalt(10);

        //hash
        const crypted = await bcrypt.hash(password, salt);

        return crypted
    },
    comparePassword: async function (password, userPassword) {

        isPasswordMatched = await bcrypt.compare(password, userPassword)

        if (isPasswordMatched) {
            return true
        } else {
            return false
        }

    },
    isMobileExist: async function (mobile) {

        const fetchedData = await User.findOne({ mobile });
        console.log(fetchedData)

        if (fetchedData) {
            return true
        } else {
            return false
        }

    },
    isEmailExist: async function (email) {

        const fetchedData = await User.findOne({ email });
        console.log(fetchedData)

        if (fetchedData) {
            return true
        } else {
            return false
        }
    },


};



module.exports = Helper;