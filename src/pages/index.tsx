import Link from 'next/link'
import { useRef } from 'react'

export default function InviPage() {
  return (
    <div className="h-full">
      <iframe
        className="fill-with-bottom-margin"
        src="https://bojagicard.com/sarah9411"
      ></iframe>
      <Link
        href="/attendance"
        className="flex h-16 w-screen place-items-center justify-center bg-fuchsia-300 text-xl font-bold text-white"
      >
        참석 여부 전달하기
      </Link>
    </div>
  )
}
