import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//init.js에는 app.js에서 임포트한 application이 있다. 애플리케이션 관련 코드들은 app.js파일에 담겨 있다.
