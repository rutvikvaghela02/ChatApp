import bcrypt from 'bcryptjs';
import userModel from "../models/user.model.js";
import genrateTokenAndSetCookie from '../utils/genrateToken.js';

export const signup = async (req, res) => {
    try {
        const { name, username, password, confirmpassword, gender } = req.body;

        const checkusername = await userModel.findOne({ username });
        if (checkusername) {
            return res.status(400).json({ error: "password don't matched" });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "password don't matched" });
        }

        //hash the password 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //image url
        const boyImageURL = "https://avatar.iran.liara.run/public/boy";
        const girlImageURL = "https://avatar.iran.liara.run/public/girl";

        const newUser = new userModel({
            name,
            username,
            password: hashPassword,
            gender,
            profilepic: gender === "male" ? boyImageURL : girlImageURL
        });


        if (newUser) {
            //genrate token

            await genrateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                gender: newUser.gender,
                profilepic: newUser.profilepic,

            })
        } else {
            return res.status(400).json({ error: "invalid user data." });

        }
    } catch (error) {
        res.send("signup controller",error.message)
        return res.status(400).json({ error: "internal server error." });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const fetchUser = await userModel.findOne({ username });
        if (!fetchUser) {
            return res.status(400).json({ error: "Username can not be found." });
        }
        const cpassword = await bcrypt.compare(password, fetchUser?.password || "");

        if (!fetchUser || !cpassword) {
            return res.status(400).json({ error: "Invalid username and password." });
        }

        await genrateTokenAndSetCookie(fetchUser._id ,res);

        res.status(201).json({
            _id: fetchUser._id,
            name: fetchUser.name,
            gender: fetchUser.gender,
            profilepic: fetchUser.profilepic,

        })
    } catch (error) {
        res.send("login controller",error.message)
        return res.status(400).json({ error: "internal server error." });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{
            maxAge : 0
        })
        return res.status(200).json({ msg: "logout successfully." });

        
    } catch (error) {
        res.send("logout controller",error.message)
        return res.status(400).json({ error: "internal server error." });
    }
}