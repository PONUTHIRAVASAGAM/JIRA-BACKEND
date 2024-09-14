const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);


const { authenticateToken, authorizeRole } = require('./middleware/authMiddleware');

// Example of a protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.send(`Hello ${req.user.username}, you have access to this protected route.`);
});

// Example of a route protected by role
app.get('/admin', authenticateToken, authorizeRole(['admin']), (req, res) => {
    res.send('Hello Admin, you have access to this admin route.');
});

