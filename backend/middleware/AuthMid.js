const User = require('../database/db'); // Adjust the path as per your project structure

const authregister = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const userExist = await User.findOne({ email: username, password: password });

        if (userExist) {
            return res.status(400).send("User already exists");
        } else if (username === null || username === undefined) {
            return res.status(400).send("Enter a valid username");
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const authlogin = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const userExist = await User.findOne({ email: username, password: password });

        if (userExist) {
            next();
        } else if (username === null || username === undefined) {
            return res.status(400).send("Enter valid username and password");
        } else {
            res.status(400).send("User doesn't exist. Please sign up");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { authregister, authlogin }; // Export as an object
