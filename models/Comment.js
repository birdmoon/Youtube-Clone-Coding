import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   video: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Video",
  //     //이 커멘트는 이 video와 연결되어 있고 이 video의 type은 mongoose.Schema.Types.ObjectId,
  //     //어떤 objectID가 어디서 온 건지 알려줘야겠지. 어느 model에서 온건지! 이 경우에 Video 즉,
  //     //Video.js의 const model = mongoose.model("Video", VideoSchema);와 연결되어 있다는 걸 연결시켜주면 됨.
  //     //기본적으로 Database에는 이런 식으로 저장될 것임.
  //     //그리고 mongoose에게 말하는 거지 video: {ㅁㅇ나ㅓ라ㅣㄴ멀} {}안에 해당하는 Video id를 가져와줘,
  //     //그래서 ref를 사용하는 거야, 실제로 우리는 Video의 ID를 원하거든..
  //     //현재 저장 버전의 방법이 있고 또 다른 하나는 Video.js에 모든 Comment ID를 배열로 넣은 방법이 있어 video.js에 comments를 확인해봐.
  //   },
});

//뭔가 줄 옵션이 있다면 object로 만들어야 해, 그렇지 않으면 그냥 한 줄이면 충분하다.
//Video.js에서 default를 추가하거나 required를 추가하거나 한 건 configuration object이기 때문에 그래.
//configuration이 필요하면 이렇게 그렇지 않으면 title: {type: String, required:"Title is required"} 이런식으로
//필요하지 않다면 그냥 title: String 이렇게 적으면 된다.

const model = mongoose.model("Comment", CommentSchema);
export default model;

//mongoose로 스키마를 만든다, 모델을 만들어 이를 export해준다.
//그리고 init에서 만든 Model을 임포트 해준다.
// 이렇게 만든 model들은 어떻게 사용할까?
//믿지 못할 정도로 간단함.. videoController에서 누군가 home으로 가면 여기 videos2는 undefined일 거야.
//search도 똑같을거고 home으로 가면 video가 정의 되지 않았다고 error가 뜰꺼야.
