import { NextFunction, Request, RequestHandler, Response } from "express"
import { ValidationChain, check, validationResult } from "express-validator"

export const mustStringValidator = (fieldName: string) => {
    return check(fieldName).not().isEmpty().withMessage(`${fieldName} is required`)
}

export const passwordValidator = () => {
    return check('password').isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }).withMessage("password is empty or weak")}


  export const wrapValidationMiddleware = (validations: ValidationChain[]): RequestHandler[] => {
        return [
          ...validations,
          (req: Request, res: Response, next: NextFunction): void => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              res.status(400).json({ errors: errors.array() });
              return;
            }
            next();
          },
        ];
      };
      