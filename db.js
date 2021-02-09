import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// dotenv.config라는 함수로 .env 파일 안에 있는 정보를 불러 온다.
// 그리고 찾은 모든 variable들을 process.env.key에 저장할꺼임.

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✔ Connected to DB");
const handleError = (error) => console.log(`✔ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

//새로운 버전의 mongoose는 이런식으로 Configuration을 보낼 수 있다.

// 'mongodb://localhost:포트번호/Database이름' 포트번호는 터미널에서
// mongod라고 하면 여러 텍스트 중에 찾아 볼 수 있다.

// dotenv를 설치한 이유는 가끔 어떤 부분을 숨겨놓고 싶을 수 있기 때문이다.
// 지금은 localhost에 설치된 MongoDB이지만 다른 곳에 설치 된다면 어떻게 될까?
// 네 코드에 있는 URL로 부터 유저 데이터를 보는 걸 원하지 않을꺼야.
// 이 때 dotenv를 사용하는거야.
