import { Router } from "express";
import { UserController } from "./userController";
import { userValidationRules } from "./userValidiation";
import { wrapValidationMiddleware } from "../utils/validationUtils";
import { authMiddleware } from "../middlewares/authMiddleware";

export const userRouter = Router()
userRouter.post('/', wrapValidationMiddleware(userValidationRules), UserController.createUser)
userRouter.post('/login', UserController.loginUser);
userRouter.get('/:id', authMiddleware, UserController.getUserById);
userRouter.delete('/:id', authMiddleware, UserController.deleteUserById)