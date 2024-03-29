# 🚀 algorithm-study
**알고리즘 관련 문제 풀이와 소스 코드 및 설명 저장소**

## 📌 스터디 참여방법 및 규칙

1. 이 저장소를 자신의 깃허브 저장소로 `fork` 한다.
2. `자신의 폴더`에 해결한 문제의 소스 코드를 `컨벤션에 맞게` 자유롭게 업로드 한다.(파일은 js 만 허용) 
3. 개인 폴더 내부는 자유롭게 추가, 수정이 가능하다.
4. 매주 스터디 시작 전 `weeklyIssue 폴더`에 `컨벤션에 맞게 발표 할 md 파일`을 업로드 한다.(마감기간 주의)

## 📌 파일 업로드 방식

1. [깃허브 GUI 방식](https://github.com/nincoding/algorithm-study/blob/main/docs/GUI%20%EB%B0%A9%EC%8B%9D%20%ED%8C%8C%EC%9D%BC%20%EC%97%85%EB%A1%9C%EB%93%9C.md)을 이용하거나 [PR 방식](https://github.com/nincoding/algorithm-study/blob/main/docs/PR%20%EB%B0%A9%EC%8B%9D%20%ED%8C%8C%EC%9D%BC%20%EC%97%85%EB%A1%9C%EB%93%9C.md)을 이용한다.
2. PR로 보낼 시 자신의  `깃허브아이디와 동일한 브랜치`를 새로 생성한 뒤 스터디 전날까지 이 저장소로 PR요청을 보낸다.
3. PR 제목은 `[본인이름] n주차_n문제` 로 작성한다.

## ✨ 파일 컨벤션 

- 개인 폴더에 추가되는 파일은 `js 파일`만 허용한다.
- 파일명 작성시 `해당플랫폼_문제제목` 으로 작성한다.
- weeklyIssue 폴더에는 `md 파일`만 허용하며 양식은 자유롭게 작성 가능하다.(자신이 해설한 링크만 첨부해도 가능)

## ✨ 커밋 컨벤션

### ✍ 개인 폴더 파일 push 및 추가 시

> 개인 폴더의 파일 커밋 컨벤션은 `속성(범위): 제목과 출처링크`로 통일한다.

1. 속성은 `feat`으로 통일한다.
2. 범위는 `()`괄호 안에 해당 문제의 플랫폼(아래 통일명 참고)을 기재한다.

- **플랫폼 통일**
  - BOJ: 백준
  - PGS: 프로그래머스
  - CPT: 코드스테이츠 코플릿
  - ETC: 그 외

3. 제목에는 앞에 `레벨/티어/키워드 중 하나`를 기재한 뒤 `_`로 구분지어 `해당 문제의 제목`을 작성한다.

- 프로그래머스 레벨 예시
  - lv.0, 레벨0, ...

- 백준 티어 예시(문제의 난이도)
  - 브론즈4, 골드1, ...

4. 줄바꿈을 한 뒤 해당 문제의 주소링크를 붙여넣는다.(문제의 주소링크가 없다면 생략가능)

- 컨벤션 사용 예시

```
//git을 사용한 커밋 예시
git commit -m "feat(${플랫폼}): ${레벨/티어/키워드 중 택1}_${문제의 제목}
//줄바꿈 후 body 작성
${문제의 링크 주소/없다면 생략가능}"

```

### ✍ weeklyIssue 폴더 파일 push 및 추가 시

- 해당 주차에 맞는 폴더에 정리한 md 파일을 컨벤션에 맞게 추가한다.

- md 파일의 컨벤션은 아래에 맞게 작성한다.

```
"docs(${본인의 이름}): ${플랫폼}_${레벨/티어/키워드 중 1}_${문제의제목}

${문제의 링크 주소/없다면 생략가능}"
```
