
// 'figlet'이라는 모듈을 요청해서 figlet 이라는 변수에 저장
var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});