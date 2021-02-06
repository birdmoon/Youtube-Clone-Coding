import express from "express";
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
  logout,
} from "../controller/userController";
import { home, search } from "../controller/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

// globalRouter.get(routes.home, (req, res) => res.send("Home"));
// globalRouter.get(routes.search, (req, res) => res.send("Search"));
// globalRouter.get(routes.join, (req, res) => res.send("Join"));
// globalRouter.get(routes.login, (req, res) => res.send("Login"));
// globalRouter.get(routes.logout, (req, res) => res.send("Logout"));

export default globalRouter;

//이 방법이 유일하게 독점적으로 URL을 다루는 방법이다.
