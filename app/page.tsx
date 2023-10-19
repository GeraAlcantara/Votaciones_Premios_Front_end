import Date from '@/components/views/date'
import Hero from '@/components/views/hero'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen h-auto w-full flex-col items-center justify-center">
        <Hero />
        <Date />
      </main>
    </>
  )
}
