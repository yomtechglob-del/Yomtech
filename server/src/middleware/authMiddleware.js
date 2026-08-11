const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
  const token = req.cookies.yomtech_admin_token;
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized access.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'SECRET');
    req.user = verified;
    next();
  } catch {
    res.status(403).json({ success: false, message: 'Invalid token session.' });
  }
};

module.exports = { authGuard };