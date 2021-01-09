const express = require("express"); //node_modules폴더에 express폴더를 가져온다.
const app = express(); //그런 다음에 application에 express를 담는다는 뜻!

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); //locallhost:4000번으로 설정한다. 숫자가 바뀌면 브라우저에 그 숫자를 넣으면 됨.
