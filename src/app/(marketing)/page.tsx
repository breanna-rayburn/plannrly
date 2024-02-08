import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl flex-grow px-4">
      <section className="flex flex-col items-center justify-center">
        <section className="flex h-[calc(60vh)] w-full">
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
              <h1 className="text-4xl font-extrabold md:text-5xl">
                Welcome to Plannrly
              </h1>
              <h2 className="my-2 text-lg">
                Your ultimate solution for seamless scheduling and stress-free
                planning. Say goodbye to overwhelming anxiety and hello to
                clarity and productivity. With Plannrly, effortlessly organize
                your day, prioritize tasks, and stay ahead of deadlines.
              </h2>
              <div className="flex w-full flex-col items-center gap-4 md:flex-row">
                <Button asChild className="w-full md:w-auto">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full md:w-auto">
                  <Link href="/">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image src="imgs/header.svg" alt="header" fill priority />
            </div>
          </div>
        </section>
        <section className="relative -z-10 mt-16 flex w-screen flex-col items-center justify-center gap-2 bg-transparent px-8 before:absolute before:inset-0 before:z-[-1] before:block before:bg-background/10 before:backdrop-blur-md before:backdrop-saturate-200 before:content-[''] lg:mt-44">
          <div className="absolute -top-20 -z-50 h-screen w-screen -translate-y-1/2 bg-[url('/imgs/bg-hero.svg')] bg-left bg-no-repeat transition-opacity after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:bg-gradient-to-b after:content-[''] lg:top-10"></div>
        </section>
      </section>
    </main>
  )
}
