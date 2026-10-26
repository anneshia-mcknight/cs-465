const passport = require('passport');
const User = require('../models/user');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !password
  ) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }

  try {
    const existingUser = await User.findOne({
      email: email.trim().toLowerCase()
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Email already registered'
      });
    }

    const user = new User({
      name: name.trim(),
      email: email.trim().toLowerCase()
    });

    user.setPassword(password);
    await user.save();

    return res.status(201).json({
      token: user.generateJWT()
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'Email already registered'
      });
    }

    return res.status(500).json({
      message: 'Registration failed'
    });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !email.trim() ||
    !password
  ) {
    return res.status(400).json({
      message: 'Email and password are required'
    });
  }

  passport.authenticate('local', (error, user, info) => {
    if (error) {
      return res.status(500).json({
        message: 'Authentication failed'
      });
    }

    if (!user) {
      return res.status(401).json({
        message: info?.message || 'Invalid credentials'
      });
    }

    return res.status(200).json({
      token: user.generateJWT()
    });
  })(req, res);
};

module.exports = {
  register,
  login
};
