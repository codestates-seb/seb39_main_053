# Cogether Team's Main-Project 🐣

## 👨‍🏫 프로젝트 소개
한국어를 공부하는 유학생들과 제2외국어를 공부하는 우리들의 니즈를 충족 시켜주기 위해,

한국어를 사랑하는 유학생 커뮤니 플랫폼을 개발하게 된 Cogether Team입니다.

저희 조는 Front-End 개발자 두 명과 Back-End 개발자 한 명으로, 총 세 명의 팀원이 협업하여 프로젝트를 진행하였습니다.

## 🔍️ 프로젝트 기획 배경
![Untitled (2)](https://user-images.githubusercontent.com/52318666/194479647-ec820ce9-f741-4612-bb6c-f120de31ef99.png)

우리는 때로 누군가와 함께 이야기를 나누며(소통을 하며) 배워야만 합니다.  
외국인 친구들과 자연스러운 소통을 하기 위해선 그 언어에 대한 문화와 표현을 올바르게 체득화시키는 것이 필요하기 때문입니다.  
하지만, 모두에게 소통하기 좋은 환경이 보장 되진 않죠. 너무 비싸서, 거리가 멀어서.. 여러 이유로 당연하다고 생각되어 지는 것들이  
어떤 누군가에게는 사치가 되기도 합니다. 저희 팀은 그런 현실에 도전하려 합니다.   

Hello World는 누구나, 경제적으로 시간적 제약없이 내가 이야기하고 싶은 언어로 말하고, 일상을 나눌 수 있는 공간입니다.  
Hello World와 함께해요!

1. 한국어(제2외국어)가 서툴지만 내가 어떤 표현이 잘못되어 있는지 힘들어요. 유학생들과 제2외국어를 공부하는 한국인이 질문을 올리면  
댓글로 답변하는 형식으로, 문장표현이나 어법에 대해서 물어보고 해당부분에 잘못된 표현을 서로 고쳐주어요.

2. 외국인 친구를 사귀고 싶어요. 사용하거나 공부하고 있는 언어, 내가 좋아하는 관심사 혹은, 가본 장소나 가보고 싶은 장소를 태그해서  
나와 비슷한 외국인친구를 찾아보아요.

3. 일상공유하면서 자유롭게 유학생 친구들과 소통하고 싶어요. 정보공유, 일상공유를 하면서 유학생들과 한국인이 소통하는 곳이에요.  
해당 게시글을 보면서 유학생들이 사용하는 언어표현, 관용어구와 같은 것들을 자연스럽게 익힐수도 있겠어요.

## 📅 프로젝트 기간
- 2022년 9월 7일(수) ~ 2022년 10월 12일(수)

## 🌐 기술 스택
![기술스택 소개](https://user-images.githubusercontent.com/52318666/194479341-f207d4bd-7f44-4e46-bfdf-295bed607932.png)

## 👨‍👨‍👦‍👦 팀원 소개
- 조영준 (Front-End)
    - 팀 내에서의 역할
        - 팀장 및 팀원 간의 소통 조율
        - 프로젝트 일정 관리
    - 담당한 부분
        - react-hook-form과 yup을 이용하여 로그인&회원가입 기능 구현
        - zustand를 통한 로그인 상태관리에 따른질문&댓글 페이지 구현

- 안태건 (Front-End)
    - 팀 내에서의 역할
        - Vercel을 이용하여 frontEnd 배포 및 aws S3 버킷생성
        - 디자인 담당
    - 담당한 부분
        - 정보공유 페이지 구현
        - 친구찾기 페이지 구현 미완
        
- 정태현 (Back-End)
    - 팀 내에서의 역할
        - AWS EC2를 이용한 서버 애플리케이션 배포
        - 깃허브 관리
        - 기술문서 관리
    - 담당한 부분
        - Spring Security, JWT를 이용한 회원 가입, 로그인 구현
        - 질문답변 게시판 CRUD 구현

## 📚 위키
- [Project Wiki Link](https://github.com/codestates-seb/seb39_main_053/wiki)

## 🔀 Git Flow Branch Strategy
- `main` : 제품으로 출시할 수 있는 브랜치
- `dev` : 출시 버전을 개발하는 브랜치
- `feat` : 기능을 개발하는 브랜치

## 📌Git Commit Convention

```
type(태그에서 선택): Subject  // -> 제목
(empty line)
body(옵션)  // -> 본문 
```

|태그 이름|설명|
|--|--|
|**Feat**|새로운 기능 추가|
|**Fix**|버그 수정|
|**Design**|UI 디자인 변경|
|**Refactor**|코드 리팩토링|
|**Docs**|문서 수정|
|**Test**|테스트 코드 작성|
|**Rename**|파일 명 또는 폴더 명 수정|
|**Remove**|파일 삭제|
