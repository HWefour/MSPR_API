const { signUp, logIn } = require("../Models/Auth");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); 
                const user = await signUp({ ...req.body, password: hashedPassword });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await logIn(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ email: user.email, role: user.role }, 'your-secret-key');
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
