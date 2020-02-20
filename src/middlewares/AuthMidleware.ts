import {Request, Response, NextFunction} from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    let auth: boolean = true;
    if(auth){
        next();
    }
    return res.send("unauth");
}