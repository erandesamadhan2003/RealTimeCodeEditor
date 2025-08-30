import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtGenerator.js";

export const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });


        const user = await User.create({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ 
            message: "Could not register user",
            error: err.message 
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select("+password");

        if (user && (await bcrypt.compare(password, user.password))) {
            return res.status(200).json({
                message: "Login successful",
                data: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id)
                }
            })
        } else {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

    } catch (err) {
        res.status(500).json({ 
            message: "Could not log in user",
            error: err.message 
        });
    }
}

