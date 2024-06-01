import { Response } from "express";

export const handleSuccess = (res: Response, message: string, data: any) => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };
  
  export const handleError = (res: Response, message: string, statusCode = 400) => {
    res.status(statusCode).json({
      success: false,
      message,
    });
  };