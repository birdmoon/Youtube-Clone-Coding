import { videos2 } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Nestory", videos2 });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

//render함수는 views 폴더에 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾고 보여줄거다.
//render 함수의 첫번째 인자는 템플릿이고, 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체다.
//videoController나 userController가 MVC에서 C부분에 해당한다.
// 컨트롤러란 데이터를 다루는 함수를 나타낸다.
