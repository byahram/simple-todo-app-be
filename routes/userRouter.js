const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");

// 1. 회원가입 endpoint
// 유저가 이메일, 패스워드, 유저이름 입력해서 보냄
// -> 받은 정보를 저장함(데이터베이스 모델 필요)
// -> 패스워드를 암호화 시켜서 저장

// (1) 라우터 만들기
// (2) 모델
// (3) 데이터를 저장 (이미 가입된 유저 유무, 패스워드 암호화)
// (4) 응답을 보낸다.
router.post("/", userController.createUser);

// 2. 로그인
// 이메일 패스워드를 입력해서 보냄
// -> 데이터베이스에 해당 이메일과 패스워드를 가진 유저가 있는지 확인
// -> 없다면 로그인 실패
// -> 있다면 유저정보 + 토큰
// -> 프론트엔드에서는 이 정보를 저장

// (1) 라우터 설정
// (2) 이메일 패스워드 정보 읽어오기
// (3) 이메일을 가지고 유저정보 가져오기
// (4) 이 유저에 디비에 있는 패스워드와 프론트엔드가 보낸 패스워드가 같은지 비교
// (5) 맞으면 토큰 발행
// (6) 틀리면 에러메세지 보냄
// (7) 응답으로 유저정보 + 토큰 보냄
router.post("/login", userController.loginWithEmail);

// 토큰을 통해 유저 id빼내고 그 아이디로 유저 객체 찾아서 보내주기
router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;
