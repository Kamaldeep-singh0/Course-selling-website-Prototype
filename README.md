# Description
It support two types of users -

1. Admins
2. Users

Admins are allowed to sign up, create courses. Users are allowed to sign up, view courses, purchase courses.

# Admin 
- POST /admin/signup Description: Creates a new admin account. Input Body: { username: 'admin', password: 'pass' } Output: { message: 'Admin created successfully' }
- POST /admin/courses Description: Creates a new course. Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100' } Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses Description: Returns all the courses. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100 }, ... ] }

# User
- POST /users/signup Description: Creates a new user account. Input: { username: 'user', password: 'pass' } Output: { message: 'User created successfully' }
- GET /users/courses Description: Lists all the courses. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100 }, ... ] }
- POST /users/courses/:courseId Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { message: 'Course purchased successfully' }
- GET /users/purchasedCourses Description: Lists all the courses purchased by the user. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100 }, ... ] }
