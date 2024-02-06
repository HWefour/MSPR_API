const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
  
        req.user = decodedToken;
        next();
    });
};

module.exports = authenticateToken;
