import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✔ Connected to DB");
const handleError = (error) => console.log(`✔ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

//새로운 버전의 mongoose는 이런식으로 Configuration을 보낼 수 있다.

// 'mongodb://localhost:포트번호/Database이름' 포트번호는 터미널에서
// mongod라고 하면 여러 텍스트 중에 찾아 볼 수 있다.
