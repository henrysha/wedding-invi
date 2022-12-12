import Form from '@/components/form'

export default function Page() {
  return (
    <main className="fill-screen auto-rows grid grid-cols-1 grid-rows-2-5 gap-16 bg-rose-200 font-serif text-amber-900 max-xs:gap-5">
      <header className="self-end">
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
