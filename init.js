import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;
//이런식으로 dotenv를 활용해서 key를 숨긴다. 이렇게 하면 키가 다른 곳에서 보이지 않지..
//gitignore 파일에서 .env 추가하는 걸 절대 잊지말걸.. 숨기려 하는 거니까

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//init.js에는 app.js에서 임포트한 application이 있다. 애플리케이션 관련 코드들은 app.js파일에 담겨 있다.
