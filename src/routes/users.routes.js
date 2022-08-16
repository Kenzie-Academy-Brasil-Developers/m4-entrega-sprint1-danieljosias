import { Router } from "express"

import createUserController from "../controllers/createUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/userLogin.controller";
import userProfileController from "../controllers/userProfile.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";

const router = Router()

router.post("", /* verifyEmailAvailabilityMiddleware, */ createUserController);
router.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
router.get("", verifyAuthTokenMiddleware, verifyIsAdm, listUsersController)
router.post("/login", userLoginController);
router.get("/profile", verifyAuthTokenMiddleware, userProfileController)

export default router