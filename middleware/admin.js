// Middleware for handling auth
const { Admin } = require("../routes/mongo");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.findOne({ Username: username });

        if (!admin) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const match = password === admin.password; 

        if (match) {
            return next();
        } else {
            return res.status(401).json({ msg: 'Invalid username or password' });
        }

}

module.exports = adminMiddleware;