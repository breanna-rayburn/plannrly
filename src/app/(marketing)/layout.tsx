import { Navbar } from './_components/navbar'

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* Footer */}
    </div>
  )
}
