import express from "express";
import routes from "../routes";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, changePassword);

// userRouter.get("/", (req, res) => res.send("user index"));
// userRouter.get("/edit", (req, res) => res.send("user edit"));
// userRouter.get("/password", (req, res) => res.send("user password"));

export default userRouter;
