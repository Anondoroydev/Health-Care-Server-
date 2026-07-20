import { NextFunction, Request, Response } from "express"
import { jwtHelper } from "../helper/jwtHelper";
<<<<<<< HEAD
import ApiError from "../errors/ApiError";
import httpStatus from "http-status"
=======
>>>>>>> origin/delvelopment

const auth = (...roles: string[]) => {
    return async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.accessToken;

            if (!token) {
                throw new Error("You are not authorized!")
            }

            const verifyUser = jwtHelper.verifyToken(token, "abcd");

            req.user = verifyUser;

            if (roles.length && !roles.includes(verifyUser.role)) {
<<<<<<< HEAD
                throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized!")
=======
                throw new Error("You are not authorized!")
>>>>>>> origin/delvelopment
            }

            next();
        }
        catch (err) {
            next(err)
        }
    }
}

export default auth;