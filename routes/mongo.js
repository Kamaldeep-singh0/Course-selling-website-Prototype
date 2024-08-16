const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kamaldeepsingh:fed35MnYTByktYwS@firstone.bmbyy.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    Username : String,
    password : String,
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    Username : String,
    password : String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description: String,
    price: Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}