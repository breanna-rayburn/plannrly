import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="sticky flex h-14 w-full border-b px-4 shadow-sm">
      <header className="mx-auto flex w-full items-center justify-between md:max-w-screen-md">
        <div className="hidden md:flex">
          <Link href="/">
            <h2>Plannrly</h2>
          </Link>
        </div>
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Signup</Link>
          </Button>
        </div>
      </header>
    </nav>
  )
}
