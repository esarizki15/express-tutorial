import {Request, Response} from "express";
import IController from "./ControllerInterface";

let data: any[] = [
    {id: 1, nama:"esa"},
    {id: 2, nama:"rizki"},
    {id: 3, nama:"hari"},
    {id: 4, nama:"utama"},
];
class UserController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data);
    }    

    create(req: Request, res: Response): Response {
        const {id, nama} = req.body;
        data.push({ id, nama });
        return res.send(data);
    }

    show(req: Request, res: Response): Response {
        const { id } = req.params;
        let person = data.find(item => item.id == id )
        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const {id} = req.params;
        const {nama} = req.body;
        let person = data.find(item => item.id == id ) ;
        person.nama = nama;
        return res.send(person);
    }

    delete(req: Request, res: Response): Response {
        const {id} = req.params;
        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
}

export default new UserController();