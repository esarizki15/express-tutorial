import BaseRoutes from "./BaseRouter"; 
import UserController from "../controllers/UserController";
import {auth} from "../middlewares/AuthMidleware";

class UserRoutes extends BaseRoutes{
    public routes(): void{
        this.router.get("/", auth, UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);
    };
}

export default new UserRoutes().router;