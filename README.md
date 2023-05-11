# 개인프로젝트 - Serendipic

![serendipic](https://user-images.githubusercontent.com/92634711/232368543-b26544cb-ea22-4e16-80be-fc512bc7c8d5.PNG)

<br />
<br />

## 0. 목차

1. [개요](#1-개요)
2. [프로젝트 배포링크 및 로컬 실행](#2-프로젝트-배포링크-및-로컬-실행)
3. [프로젝트 기능 및 프리뷰](#3-프로젝트-기능-및-프리뷰)
4. [폴더구조](#4-폴더구조)
5. [코드 컨벤션](#5-코드-컨벤션)
6. [기술스택](#6-기술스택)
7. [회고](#7-회고)
8. [개선사항 및 추가기능](#8-개선사항-및-추가기능)

<br />
<br />

## 1. 개요

- 기간: 2023.04.11 ~ 2023.04.12
- 소개: Unsplash API를 이용하여 사용자가 입력한 키워드와 관련된 랜덤 이미지 제공

<br />
<br />

## 2. 프로젝트 배포링크 및 로컬 실행

- 배포링크: https://serendipic.vercel.app/

- 실행방법

```shell

# 프로젝트 clone
$ git clone https://github.com/tnals545/Personal_Project--Serendipic.git

# npm 설치
$ npm install

# .env 파일 생성 및 해당 상수 삽입
NEXT_PUBLIC_BASE_URL="https://api.unsplash.com/photos/random"
NEXT_PUBLIC_API_KEY="Enter your unsplash secret key"

# 프로젝트 실행
npm start

```

<br />
<br />

## 3. 프로젝트 기능 및 프리뷰

#### API

<details>
  <summary>Unsplash API를 이용하여 사용자가 입력한 키워드와 연관된 랜덤 이미지 제공</summary>
  <br />
  <div markdown="1">

![keyword_search](https://user-images.githubusercontent.com/92634711/232393695-f37c8eec-58d3-43ae-bfb3-a299313408c4.gif)

  </div>
</details>

<br />

#### UI / UX

<details>
  <summary>사용자가 페이지 방문시 제목 타이핑 효과</summary>
  <br />
  <div markdown="2">

![typing_effect](https://user-images.githubusercontent.com/92634711/232388454-77b6386b-5bc0-4fe2-a57e-952aebbbede0.gif)

  </div>
</details>

<details>
  <summary>이전 검색 키워드 디자인 및 클릭시 해당 키워드로 랜덤 이미지 제공</summary>
  <br />
  <div markdown="3">

![prev_keyword](https://user-images.githubusercontent.com/92634711/232394025-0a81d290-91c9-41ec-bd1d-7a070ba6f62e.gif)

  </div>
</details>

<details>
  <summary>경고(에러) 알림창</summary>
  <br />
  <div markdown="4">

![alert](https://user-images.githubusercontent.com/92634711/232393367-f1606435-6a61-498d-b4bd-40b903bc3160.gif)

  </div>
</details>

<br />
<br />

## 4. 폴더구조

```
src
 ┣ api
 ┃ ┣ core
 ┃ ┃ ┗ index.ts
 ┃ ┣ main.ts
 ┣ common
 ┃ ┣ hooks
 ┃ ┃ ┣ useAppSelector.ts
 ┃ ┃ ┗ useInterval.ts
 ┃ ┗ makeColor.ts
 ┣ components
 ┃ ┣ ImageSearch.tsx
 ┃ ┣ PrevKeyword.tsx
 ┃ ┣ StatusBasedAlert.tsx
 ┃ ┗ TypingEffect.tsx
 ┣ pages
 ┃ ┣ index.tsx
 ┃ ┣ _app.tsx
 ┃ ┗ _document.tsx
 ┣ store
 ┃ ┣ slice
 ┃ ┃ ┣ alertSlice.ts
 ┃ ┃ ┗ keywordDataSlice.ts
 ┃ ┗ index.ts
 ┗ styles
   ┗ global.style.ts
```

<br />
<br />

## 5. 코드 컨벤션

- git commit message 컨벤션

| 커밋 유형        | 의미                                                         |
| ---------------- | ------------------------------------------------------------ |
| Feat             | 새로운 기능 추가                                             |
| Fix              | 버그, 기능 수정                                              |
| Docs             | 문서 수정                                                    |
| Style            | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor         | 코드 리팩토링                                                |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore            | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design           | CSS 등 사용자 UI 디자인 변경                                 |
| Comment          | 필요한 주석 추가 및 변경                                     |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
| Setting          | prettier, eslint 등 전역 설정 변경, 삭제, 추가하는 경우      |
| ReadMe           | 리드미파일 추가, 수정, 삭제                                  |

<br />
<br />

## 6. 기술스택

- 프론트엔드

  <img alt="nextdotjs" src ="https://img.shields.io/badge/next.js-000000.svg?&style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img alt="redux" src ="https://img.shields.io/badge/redux-764ABC.svg?&style=for-the-badge&logo=redux&logoColor=white"/>
  <img alt="typescript" src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
  <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
  <img alt="javascript" src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black"/>

<br />
<br />

## 7. 회고

- 반응형 웹사이트를 만들기 위한 기초를 다질 수 있는 프로젝트 경험이었다.
- 프로젝트를 기획했던 기능과 디자인 및 UI를 구현하여 만족스러운 결과를 얻었다고 생각한다.
- 물론 프로젝트를 구현하면서 기획 당시에는 생각하지 못했던 부분이 있었는데, 이처럼 개선사항이 생기거나 새로운 아이디어가 떠올라 기능을 추가해야 한다면 추후에 수정하여 프로젝트를 업데이트할 예정이다.
- 서버와 DB가 없어 풀스택 프레임워크인 Next.JS의 장점을 살리지 못했다는 아쉬움이 있다.

<br />
<br />

## 8. 개선사항 및 추가기능

- 개선사항 및 추가기능

  - [개선사항 wiki 바로가기](https://github.com/tnals545/Personal_Project--Serendipic/wiki/%EA%B0%9C%EC%84%A0%EC%82%AC%ED%95%AD)

  - 추가기능

    - 서버와 DB를 추가하여 회원기능 추가 (예정)

<br />
<br />
