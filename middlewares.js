import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; //미들웨어에서 locals에 siteName을 추가했다.
  res.locals.routes = routes; //routes에 routes.js 객체를 추가.
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

//전역적으로 사용할 수 있는 미들웨어 함수를 만들어봤다. 변수를 사용하고 싶으면 여기다 적용하면 된다.
//템플릿, 뷰, 모든 곳에서 사용가능함.
