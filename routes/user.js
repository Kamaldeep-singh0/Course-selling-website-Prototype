const express = require("express");
const mongoose = require('mongoose');
const router = express();
const userMiddleware = require("../middleware/user");
const { User,
    Course }= require("./mongo");

router.use(express.json());

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user = req.body.username;
    const pass = req.body.password;

    await User.create({
        Username : user,
        password : pass 

    })

    res.status(200).json({ 
        message: 'user created successfully' }
    );
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    });
    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ Username: username });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

   

    if (user.purchasedCourses.length === 0) {
        return res.json({ courses: [] });
    }
    console.log(user.purchasedCourses);

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses});
});

router.listen(3000);

module.exports = router