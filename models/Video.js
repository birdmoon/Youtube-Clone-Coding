import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //Date.now 자체는 function이고 Date.now()는 그 함수를 실행해서 현재 날짜를 반환하는 거야.
    //따라서 default: Date.now를 하게되면 document를 저장할 때마다 해당 function을 실행해서 현재 날짜를 받게 된다.
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

//해야 할 것 하나는 model 즉 document name이고 다른 하나는 schema야
//schema는 shape이야. model은 그냥 실제 data이고 그런 식으로 이해하면 돼,
//용어는 걱정 않해도 돼 후에 자연스럽게 이해하게 될거임.
//schema를 정의해보자!
//우린 절대 Video를 Database에 저장하지 않을거야. bytes를 저장하는 게 아니라
//Video의 link를 집어 넣는거야.
//우리의 경우 우리 서버(Amazon)에 비디오를 저장하는거지..
//Database에 Video를 저장하지 않아 이건 그냥 text Database야.
//Video의 주소를 넣는거지 Video 전체를 넣는 게 아닌거지
//Video전체를 넣으면 Database가 겁나 무거워지거든..

//할 수 있는게 뭐가 있는지 알고 싶다면
//mongoose documentation의 schema section에서 모든 옵션들을 확인 할 수 있다.

const model = mongoose.model("Video", VideoSchema);
export default model;

//definition을 통해 실제 document를 만드는거지 schema가 definition 같은거야.
//model의 이름은  Video, 그리고 Video model의 스키마는 VideoSchema가 될거야.
