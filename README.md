# MyBlog

# Backend

## backend_lib

<details>

<summary>backend_lib</summary>

- express : 서버 프레임워크
- cors : CORS 문제 해결
  - cross-origin HTTP
  - 프론트엔드와 백엔드의 서버가 다른데 프론트에서 백엔드에 요청을 보내서 생김
- dotenv : .env 파일 사용하기
- hpp, helmet : 보안상 취약점 보안
- mongoose : 몽고디비를 자바스크립트로만 사용하기
- moment : 몽고디비 한국시간으로 맞추기

<hr>

- @babel/cli : 바벨을 터미널에서 명령어처럼 사용
- @babel/core, : 바벨의 핵심 파일, 바벨의 다른 모듈들이 종속성을 가진다.
- @babel/node : 바벨의 CLI 도구 중 하나이다. 이전 버전의 babel-cli 로부터 분리되었다.
- @babel/preset-env : 바벨의 preset 중 하나로 es6+ 이상의 자바스크립트를 각 브라우저/ 노드 환경에 맞는 코드로 변환시켜준다.
- babel-loader : 최종적으로 컴파일
- @babel/polyfill : ES5에 존재하지 않는 최신문법을 지원

<hr>

- morgan : 서버의 로그 보여줌
- nodemon : 파일을 관찰하다 변화가 있으면 애플리케이션을 재실행 해준다.

<hr>
로그인 사용

- JWT : 로그인을 위해 사용
  - 발급받으면 로그인 인증 시 DB를 갈 필요없이 인증가능
- bcryptjs : 비밀번호를 저장할때 단방향 암호화를 하므로 암호화를 살 떄 사용

</details>

## DB modeling

<details>

<summary> 1. user </summary>

| **name**      | **type** | **option**                                   |
| ------------- | -------- | -------------------------------------------- |
| name          | String   | required(O)                                  |
| email         | String   | unique(O)                                    |
| password      | String   | required(O)                                  |
| role          | String   | enum[MainJuin, SubJuin, User], default(User) |
| register_data | Date     | default(Now)                                 |
| comments      | Array    | ref(posts, comments)                         |
| posts         | Array    | ref(posts)                                   |

</details>

<details>

<summary> 2. post </summary>

| **name** | **type** | **option**                                            |
| -------- | -------- | ----------------------------------------------------- |
| name     | String   | required(O), index(O)                                 |
| title    | String   | unique(O)                                             |
| contents | Number   | defalut(-2)                                           |
| views    | String   | defalut("https://source.unsplash.com/random/301x201") |
| fileUrl  | Date     | default(Now)                                          |
| date     | String   | default(Now)                                          |
| category | Single   | ref(category)                                         |
| comments | Single   | ref(comment)                                          |
| creator  | Single   | ref(user)                                             |

</details>

<details>

<summary> 3. comment </summary>

| **name**    | **type** | **option**   |
| ----------- | -------- | ------------ |
| contents    | String   | required(O)  |
| date        | String   | default(Now) |
| post        | Single   | ref(post)    |
| creator     | Single   | ref(user)    |
| creatorName | String   | X            |

</details>

<details>

<summary> 4. category </summary>

| **name**     | **type** | **option**        |
| ------------ | -------- | ----------------- |
| categoryName | String   | default("미분류") |
| posts        | Arrat    | ref(post)         |

</details>

# Frontend

CRA으로 프로젝트 설정

## 폴더 구조

- assets
- components
- container
- redux
- routers
- hooks

## 프론트 라이브러리

<details>
<summary>Front_lib</summary>

- redux, react-redux, redux-actions : 상태관리
- redux-devtools-extension : 리덕스 크롬 데브툴
- redux-saga : 비동기 상태 관리
- redux-router-dom, connected-react-router : 라우터 관리
- bootstrap, reactstrap : css 프레임워크
- dotenv : .env 사용

</details>
