const prisma = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ success: false, message: 'Invalid password.' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'SECRET', { expiresIn: '1d' });

    res.cookie('yomtech_admin_token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax'
    });

    res.json({
      success: true,
      message: 'Logged in successfully.',
      user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('yomtech_admin_token');
  res.json({ success: true, message: 'Logged out.' });
};

exports.getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true, fullName: true, role: true, createdAt: true }
    });
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};