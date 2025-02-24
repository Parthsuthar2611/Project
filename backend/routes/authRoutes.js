const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

const router = express.Router();

// 🔹 Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
        db.query(sql, [name, email, hashedPassword, role], (err, result) => {
            if (err) return res.status(500).json({ success: false, message: "User already exists!" });

            res.json({ success: true, message: "Signup successful!" });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error during signup!" });
    }
});

// 🔹 Login Route
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ success: false, message: "Invalid credentials" });

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ success: true, token, role: user.role });
    });
});

module.exports = router;
