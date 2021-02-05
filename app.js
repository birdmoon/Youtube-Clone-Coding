import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

// import { userRouter } from "./routers/userRouter"; //router파일에서 디폴트로 export한게 아니라 임포트 시키는 문법이 다르다. (변수처리)
// const express = require("express"); //node_modules폴더에 express폴더를 가져온다. 이를 최신버전의 JS로 표현하면 아래와 같다.
const app = express();

app.use(helmet()); //application이 더 안전하도록 만들어준다.
app.set("view engine", "pug"); //express api가이드를 참고하여 pug란 벨류의 view engine 속성을 세팅한다.
app.use(cookieParser()); //쿠키를 전달받아서 사용할 수 있도록 만들어주는 미들웨어. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용한다.
app.use(bodyParser.json()); //bodyParser는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어. request 정보에서 form이나 json형태로 된 body를 검사한다.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //application에서 발생하는 모든 일들을 logging하는 미들웨어
app.use(localsMiddleware); //middleware.js에 만들어놓은 localsMiddleware함수는 globalRouter, userRouter, videoRouter보다 상위에 위치해 있어야 한다.

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); //use는 누군가 use경로로 오면 이 라우터 전체를 사용하겠다는 의미임. 누군가 routes.users로 접속하면 userRouter를 사용하겠다.
app.use(routes.videos, videoRouter);

export default app;

//app.js에는 애플리케이션 정보들이 담겨져 있고.. express를 임포트 하여 express를 실행한 결과를 app 상수로 만들었다. 그리고 middleware들을 추가해줬다.
//express모듈은 use 메서드를 사용합니다. use method는 request, response 외에 세번 ㅉ째 매개변수로 next를 ㅅ용할 수 있습니다.
