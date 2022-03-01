import { createToken } from '../services/auth.js';
import User from '../models/user.model.js';

export function userLogin(req, res) {
    const userData = { userName: req.body.userName };
    const token = createToken(userData);
    res.json({ token });
}
export async function userRegister(req, res) {
    const newUser = await User.create({ ...req.body });
    res.json({ ...newUser });
}
