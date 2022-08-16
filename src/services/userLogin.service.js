import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import database from "../database/index";

const userLoginService = async (email, password) => {
    try {
        /* const user = users.find((element) => element.email === email); */
        const res = await database.query('SELECT * FROM users WHERE email = $1',[email])

        if (res.rows.length === 0) {
            return "Email ou senha inválidos";
        }
        
        const user = res.rows[0];

        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
        return "Email ou senha inválidos";
        }

        const token = jwt.sign({ email: email, id: user.id, password: user.password }, "SECRET_KEY", { expiresIn: "24h" });

        return token;
        
    } catch (error) {
        throw new Error({
            message: error.message
        })
    }
};

export default userLoginService;