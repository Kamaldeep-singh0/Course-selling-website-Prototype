const express = require("express");
const adminMiddleware = require("../middleware/admin");
const app = express();
const {  Admin,
    User,
    Course }= require("./mongo");

    app.use(express.json());

// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;

    await Admin.create({
        Username : user,
        password : pass 

    })

    res.status(200).json({ 
        message: 'Admin created successfully' }
    );
});

app.post('/admin/course', adminMiddleware, async (req, res) => {
    // Implement course creation logic
      const course = req.body;

     const admin = await Course.create({
            title:course.Title,
            description : course.Description,
            price : course.Price
    })

    res.status(200).json({ 
        message: 'Admin course created successfully',
        id: admin._id
     }
    );

});

app.get('/admin/course', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    });
    
});

app.listen(3000);

module.exports = app;