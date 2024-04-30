const { validate } = require('../validator')

const User = require('../model/user');
const Helper = require('../middleware/helper/common');

const addUser = async (req, res) => {
    try {
        const parameters = req.body;
        const validation = await validate(parameters, 'addUser')

        let { name, email, mobile, password } = validation;

        password = await Helper.securePassword(password);

        const isMobileExists = await Helper.isMobileExist(mobile);
        if (isMobileExists) {
            return res.status(200).send({ status: false, message: 'Mobile is already exists' })
        }

        const isEmailExists = await Helper.isEmailExist(email);
        if (isEmailExists) {
            return res.status(200).send({ status: false, message: 'Email is already exists' })
        }

        const data = { name, email, mobile, password, isEmailVerified: false, isMobileVerified: false }

        const savedData = await User.create(data);

        console.log(savedData)

        return res.status(201).send({ status: true, message: "Created successfully!" })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { addUser }