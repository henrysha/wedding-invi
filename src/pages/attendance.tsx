import Link from 'next/link'
import Form from '@/components/form'

export default function AttendancePage() {
  return (
    <main className="fill-screen grid grid-cols-1 gap-16 bg-rose-200 font-serif text-amber-900 max-xs:gap-5 xs:grid-rows-2-5">
      <header className="flex flex-col justify-between max-xs:pt-10">
        <nav>
          <Link href="/" className="pl-2 align-middle font-sans text-xl">
            &lt; 청첩장으로 돌아가기
          </Link>
        </nav>
        <h1 className="text-4xl leading-relaxed max-xs:text-3xl">
          식사 및 참석여부를
          <br />
          알려주세요
        </h1>
      </header>
      <section className="px-5 leading-loose">
        <Form />
      </section>
    </main>
  )
}
