// import { videos2 } from "../db";
import routes from "../routes";
import Video from "../models/Video"; //이건 Database의 element가 아니라 단지 model이야, 아예 다른거임. element를 받는 통로일 뿐이지 element 자체는 아님.

export const home = async (req, res) => {
  try {
    const videos2 = await Video.find({});
    throw Error("asdkjal");
    res.render("home", { pageTitle: "Nestory", videos2 });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Nestory", videos2: [] });
  }
  // const videos2 = await Video.find({});

  //async 자바스크립트 함수를 추가 , 너를 기다려주는 무언가임.
  //async는 "자바스크립트야 funciton의 어떤 부분은 꼭 기다려야해"라고 의미와 같다.
  //await을 하게 되면 await 부분이 끝나기 전까지는 render부분을 실행하지 않을 것이란 걸 확실하게 보여준다. 아주 멋지지!
  //해당 과정이 성공적으로 끝나야 하는건 아니야, 그냥 끝날 때까지 기다리는거지,
  //예를 들어 error가 생겨도 다음 render 부분을 실행해 왜냐면 끝났거든 성공적으로 끝난게 아니라 그냥 끝난거야.
  //이렇게 짜는 건 좋지 않아, 발생할 수 있는 모든 error를 잡아야 해..
  //그래서 try로 감싼다. try는 우리가 해야 할 것들, 그리고 만약 실패한다면 해당 error를 잡아낼거야. 그래야 우리가 무슨 error인지 볼 수 있거든
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos2 });
};

// export const videos = (req, res) =>
//   res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req; //req안에 있는 body에서 file, title, description을 가져온다.
  // To Do: Upload and save video
  // 사용자가 비디오를 업로드 하고 나면, 새로운 id를 반환받고, 업로드 후에 사용자를 업로드한 비디오의
  //videoDetail 페이지로 이동시켜주는 프로세스
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

//render함수는 views 폴더에 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾고 보여줄거다.
//render 함수의 첫번째 인자는 템플릿이고, 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체다.
//videoController나 userController가 MVC에서 C부분에 해당한다.
// 컨트롤러에서는 주로 데이터를 다룬다.
