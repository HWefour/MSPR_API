const { signUp, logIn } = require("../Models/Auth");
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const user = await signUp(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await logIn(email);
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ email: user.email, role: user.idRole }, 'your-secret-key');
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};