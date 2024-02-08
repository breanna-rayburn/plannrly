import { Navbar } from './_components/navbar'

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      {children}
      {/* Footer */}
    </div>
  )
}
