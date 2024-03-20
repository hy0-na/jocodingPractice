// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// axios는 요청하는 라이브러리, express는 받은 값을 돌려주는 역할 (axios로 보낸 요청을 express로 받아 값을 반환)
const express = require('express')

// CORS 관련 오류 해결 라이브러리
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors()); // 비워놓으면 전부 다 허용, 조건을 걸고 싶으면 괄호 안에 설정

// get : HTTP 메소드 -- 요청 방식 1.GET, 2.POST
// '/' : 라우팅 -- / or /board or /board/write 등 경로
// () => {} : 콜백 함수
// 라우팅이 '/'(root)로 들어왔을 때 콜백함수 실행
app.get('/', (req, res) => {
// get 메소드로 요청된 것을 받겠다!
    res.send('Hello, World!')
    // 응답(res)에 문자열을 보내겠다 ~
})

app.get('/dog', (req, res) => {
    res.send('<h1> 강아지 </h1>') //html이나 링크 등도 보낼 수 있음
})

app.get('/cat', (req, res) => {
    res.send({'고양이' : '냐옹'})
    // 또는
    // res.json({'고양이' : '냐옹'})
})

    // user의 id를 변수로 받음
app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)

    const q = req.query // localhost:3000/user/hyunah?q=hy0na&name=hyunah&age=20 입력한 경우
    console.log(q) // { q: 'hy0na', name: 'hyunah', age: '20' }

    res.json({'userid' : q.id})
})

// app.listen : 몇 번 포트인지를 확인
// port번호를 듣게 되면 콜백함수()=>{} 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 콜백함수 예시 - 함수의 실행 순서를 조정할 때 보통 사용
// 함수(해당 함수가 끝나고 실행할 함수)
setTimeout(() => {console.log("5초 지남")}, 5000) // 5000ms(5s)가 지난 후 console.log 실행



// 동물 소리 API 서버 만들기
// GET /sound/:name 으로 name에 따라 다른 울음소리 출력
app.get('/sound/:name', (req,res) => {
    const { name } = req.params // const {name} == p.name
    console.log(name)
    if(name == 'dog'){
        res.json({'sound' : '멍멍'})
    }else if( name == 'cat'){
        res.json({'sound' : '야옹'})
    }else if( name == 'pig'){
        res.json({'sound' : '꿀꿀'})
    }else{
        res.json({'sound' : '알 수 없음'})
    }
})