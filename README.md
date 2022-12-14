# Wedding-invi

## 개요

간혹 모바일 청첩장 업체중에 참석여부 조사 기능이 들어가있지 않은 업체가 있다.

이런 업체를 이용하게 될 경우에 활용할 수 있는 프로젝트이다.

기본적으로 iframe을 이용하여, 업체의 모바일 청첩장을 띄워주고,
하단에 참석 여부 전달하기 버튼과 커스텀 카카오톡 공유 메시지 기능을 추가하였다.

참석 여부 저장을 위한 데이터베이스는 노션 API를 활용하여 노션 데이터베이스를 활용한다. 비용도 무료이며, 노션을 통해 인원 관리가 가능하다는 점이 큰 장점이다.

[src/server/trpc/router/attendance.ts](src/server/trpc/router/attendance.ts) 이 파일에 주석으로 설명해두었는데, 노션에 데이터베이스 구축이 선행되어야 정상 작동하니 유의하자.

카카오톡 공유 메시지 기능은 커스텀 메시지 템플릿을 활용한다. 이를 위해서는 카카오톡 개발자 페이지에 가입하여, 어플리케이션을 생성하고 템플릿을 생성할 수 있다.

## 설정해야하는 환경변수

필요한 환경변수 스키마는 다음 파일에 정의되어있다
[src/env/schema.mjs](src/env/schema.mjs)

```js
NOTION_API_KEY: z.string(), // 노션 API Key
NOTION_DATABASE_ID: z.string(), // 참가여부 등록을 위한 노션 database id
NEXT_PUBLIC_KAKAO_API_KEY: z.string(), // 카카오 개발자 SDK Js API KEY
NEXT_PUBLIC_KAKAO_MESSAGE_TEMPLATE_ID: z.number(), // 카카오 메시지 템플릿 ID.
NEXT_PUBLIC_INVITATION_LINK: z.string(), // 모바일 청첩장 주소
```

위와 같이 총 다섯가지의 env variable을 설정해주면 된다.

## 배포

배포는 원하는 플랫폼에 진행하면 된다. 다만 Next.js 프로젝트이기 때문에 Vercel 배포를 추천한다.
