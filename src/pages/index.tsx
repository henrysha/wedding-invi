import Link from 'next/link'
import { KakaoCustomShareButton } from '@/components/KakaoCustomShareButton'

export default function InviPage() {
  return (
    <div className="relative h-full">
      <iframe
        className="fill-with-bottom-margin"
        src="https://bojagicard.com/i/home.php?uid=sarah9411"
      ></iframe>
      <div className="absolute right-4 bottom-20">
        <KakaoCustomShareButton />
      </div>
      <Link
        href="/attendance"
        className="flex h-16 w-screen place-items-center justify-center bg-fuchsia-300 text-xl font-bold text-white"
      >
        참석 여부 전달하기
      </Link>
    </div>
  )
}
