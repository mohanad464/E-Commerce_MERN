import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { ExtendRequest } from "../types/extendedRequest";



const validateJWT = (req: ExtendRequest, res: Response, next: NextFunction) => {
  const authorizationHeader = req.get("authorization");

  if (!authorizationHeader) {
    res.status(403).send("authorization header was not provided");
    return;
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    res.status(403).send("Bearer token not found");
    return;
  }

  jwt.verify(token, "R8Bne9yXOpS3IQMHGVsJ2rpFKl9MjW5U", async (err, payload) => {
    if (err) {
      res.status(403).send("Invalid token");
      return;
    }

    if (!payload) {
      res.status(403).send("Invalid token payload");
      return;
    }

    const userPayLoad = payload as {
      email: string;
      firstName: string;
      lastName: string;
    };

    // Fetch user from database based on payload
    const user = await userModel.findOne({ email: userPayLoad.email });
    req.user = user;
    next();
  });
};

export default validateJWT;