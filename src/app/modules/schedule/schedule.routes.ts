import express from "express";
import { ScheduleController } from "./schedule.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
    "/",
    auth(UserRole.DOCTOR, UserRole.DOCTOR),
    ScheduleController.schedulesForDoctor
)

router.post(
    "/",
<<<<<<< HEAD
    auth(UserRole.ADMIN),
=======
>>>>>>> origin/delvelopment
    ScheduleController.insertIntoDB
)


router.delete(
    "/:id",
<<<<<<< HEAD
    auth(UserRole.ADMIN),
=======
>>>>>>> origin/delvelopment
    ScheduleController.deleteScheduleFromDB
)
export const ScheduleRoutes = router;