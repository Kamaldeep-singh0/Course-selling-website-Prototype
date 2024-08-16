const { User } = require("../routes/mongo");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({ Username: username });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const match = password === user.password; 

        if (match) {
            return next();
        } else {
            return res.status(401).json({ msg: 'Invalid username or password' });
        }
}

module.exports = userMiddleware;