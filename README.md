# 이 저장소는 ..
* Node 와 Express 4.0을 이용하여 REST API 만드는 예제인 [scotch-io/node-api](https://github.com/scotch-io/node-api)에 Bootstrap과 Backbone.js를 이용한 예제 파일입니다.  
* Backbone 관련 해서는 [Backbone.js Tutorial - Beginners 동영상](https://www.youtube.com/watch?v=FZSjvWtUxYk)을 참조하였습니다.

## 유용한 도구 / 서비스
  * API Test 도구 postman : https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop
  * 60M 무료 MongoDB (test용) : https://modulus.io
  * Chrome 개발자 도구
    * [한글번역](http://zziuni.github.io/blog/2013/10/12/chrome-devtools-revolutions-2013-in-korean/)
    * [동영상](https://www.youtube.com/watch?v=x6qe_kVaBpg)
    * [프리젠테이션 자료](http://www.slideshare.net/netil/ss-28588952)

## 참고 자료
  * Node Rest 예제 (express4 , mongodb) : https://github.com/yomybaby/node-api : [원작자 관련 블로그 글]( http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4)
  * Backbone.js
    * [Backbone Beginer 동영상](https://www.youtube.com/watch?v=FZSjvWtUxYk) : [관련소스](https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/videos/beginner)
    * [Bakcbone 모델](http://codeflow.co.kr/question/501/backbonejs-에서-model-이-무엇인가요/)
  * [Angular 50 예제](https://github.com/curran/screencasts/tree/gh-pages/introToAngular)

## 만드는 순서
  * 라우터로 home과 new를 구분
  * view를 생성하여 각각 render
  * 컬렉션 생성하여 렌더시 fetch하도록 구현
  * 모델의 id 지정위해 모델 생성하고 컬렉션 연결

---------

# Building a RESTful API in Node and Express

Using the new Express 4.0 Router to build an API

[Read the tutorial](http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4)

## Requirements

- Node and npm

## Installation

- Clone the repo: `git clone git@github.com:scotch-io/node-api`
- Install dependencies: `npm install`
- Start the server: `node server.js`

## Testing the API
Test your API using [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop)
