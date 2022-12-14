import Head from 'next/head'
import Link from 'next/link'
import { KakaoCustomShareButton } from '@/components/KakaoCustomShareButton'
import { env } from '@/env/client.mjs'

export default function InviPage() {
  return (
    <>
      <Head>
        <title>모바일 청첩장</title>
      </Head>
      <div className="h-full">
        <iframe
          className="fill-with-bottom-margin"
          src={env.NEXT_PUBLIC_INVITATION_LINK}
        ></iframe>
        <div className="flex items-center">
          <Link
            href="/attendance"
            className="flex h-16 flex-grow place-items-center justify-center bg-fuchsia-300 text-xl font-bold text-white"
          >
            참석 여부 전달하기
          </Link>
          <KakaoCustomShareButton />
        </div>
      </div>
    </>
  )
}
