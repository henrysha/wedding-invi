import Script from 'next/script'

import Image from 'next/image'
import { env } from '@/env/client.mjs'

export const KakaoCustomShareButton = () => {
  const onLoad = () => {
    const _window = window as any
    if (!_window.Kakao.isInitialized())
      _window.Kakao.init(env.NEXT_PUBLIC_KAKAO_API_KEY)

    _window.Kakao.Share.createCustomButton({
      container: '#kakaotalk-sharing-btn',
      templateId: env.NEXT_PUBLIC_KAKAO_MESSAGE_TEMPLATE_ID,
    })
  }

  return (
    <>
      <a id="kakaotalk-sharing-btn">
        <Image
          src="/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유하기"
          width={34}
          height={34}
        />
      </a>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
        integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
        crossOrigin="anonymous"
        onLoad={onLoad}
      />
    </>
  )
}
