export const home = (req, res) => res.render("home"); //render함수는 views 폴더에 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾고 보여줄거다.
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");

//videoController나 userController가 MVC에서 C부분에 해당한다.
// 컨트롤러란 데이터를 다루는 함수를 나타낸다.
