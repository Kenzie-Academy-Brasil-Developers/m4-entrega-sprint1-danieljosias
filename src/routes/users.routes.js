import { Router } from "express"

import createUserController from "../controllers/createUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/userLogin.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
router.get("", listUsersController)
router.post("/login", userLoginController);

export default router