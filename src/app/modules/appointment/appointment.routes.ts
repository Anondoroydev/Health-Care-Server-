import express from "express";
import { AppointmentController } from "./appointment.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

<<<<<<< HEAD
router.get(
    "/my-appointments",
    auth(UserRole.PATIENT, UserRole.DOCTOR),
    AppointmentController.getMyAppointment
)

router.post(
    "/",
    auth(UserRole.PATIENT),
    AppointmentController.createAppointment
)

router.patch(
    "/status/:id",
    auth(UserRole.ADMIN, UserRole.DOCTOR),
    AppointmentController.updateAppointmentStatus
)

=======
router.post(
    "/",
    auth(UserRole.PATIENT),
    AppointmentController.createAppointment
)

>>>>>>> part-4
export const AppointmentRoutes = router;