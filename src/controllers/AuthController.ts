import {Request, Response} from "express";
import Authentication from "../utils/Authentication";

const db = require("../db/models");
class AuthController{
    register = async (req: Request, res: Response): Promise<Response> => {
        let {username, password} = req.body;
        const hashedPassword: string = await Authentication.passwordHash(password);
        const createdUser = await db.user.create({ username, password:hashedPassword });

        return res.send(createdUser);
    }    

    login = async (req: Request, res: Response): Promise<Response> => {
        let {username, password} = req.body;
        const user = await db.user.findOne({
            where: {username}
        });

        let compare = await Authentication.passwordCompare(password, user.password);
        if(compare){
            let token = Authentication.generateToken(user.id, username, user.password);
            return res.send({token});
        }

        return res.send("auth failed");
    }
}

export default new AuthController();