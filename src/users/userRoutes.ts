import { Router } from "express";
import { UserController } from "./userController";
import { userValidationRules } from "./userValidiation";
import { wrapValidationMiddleware } from "../utils/validationUtils";

export const userRouter = Router()
userRouter.post('/', wrapValidationMiddleware(userValidationRules), UserController.createUser)