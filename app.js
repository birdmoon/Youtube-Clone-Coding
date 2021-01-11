import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import { userRouter } from "./routers/userRouter"; //router파일에서 디폴트로 export한게 아니라 임포트 시키는 문법이 다르다. (변수처리)
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

// const express = require("express"); //node_modules폴더에 express폴더를 가져온다. 이를 최신버전의 JS로 표현하면 아래와 같다.
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter); //get과 use의 차이 use는 누군가 use경로로 오면 이 라우터 전체를 사용하겠다는 의미임.
app.use("/video", videoRouter);

export default app;
