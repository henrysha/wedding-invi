import { type AppType } from 'next/app'
import Head from 'next/head'

import { trpc } from '@/utils/trpc'

import '@/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>모바일 청첩장</title>
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://wedding-invi.vercel.app">
        <meta property="og:title" content="성욱 다예 결혼합니다.">
        <meta property="og:image" content="https://wedding-invi.vercel.app/wedding.jpg">
        <meta property="og:description" content="2023년 3월 11일 오후 한시 판교 차바이오 컴플렉스에서 결혼합니다. 오셔서 자리를 빛내주세요">
        <meta property="og:site_name" content="모바일 청첩장">
        <meta property="og:locale" content="ko_KR">
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="성욱 다예 결혼합니다." />
        <meta name="twitter:description" content="2023년 3월 11일 오후 한시 판교 차바이오 컴플렉스에서 결혼합니다. 오셔서 자리를 빛내주세요" />
        <meta name="twitter:image" content="https://wedding-invi.vercel.app/wedding.jpg" />
      </Head>
        <Component {...pageProps} />
    </>
  )
}

export default trpc.withTRPC(MyApp)
