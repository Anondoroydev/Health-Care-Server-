import express from "express";
import { DoctorScheduleController } from "./doctorSchedule.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
<<<<<<< HEAD
import validateRequest from "../../middlewares/validateRequest";
import { DoctorScheduleValidation } from "./doctorSchedule.validation";
=======
>>>>>>> origin/delvelopment

const router = express.Router();

router.post(
    "/",
    auth(UserRole.DOCTOR),
<<<<<<< HEAD
    validateRequest(DoctorScheduleValidation.createDoctorScheduleValidationSchema),
=======
>>>>>>> origin/delvelopment
    DoctorScheduleController.insertIntoDB
)

export const doctorScheduleRoutes = router;