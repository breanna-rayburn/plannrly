export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {/* Navbar */}
      {children}
      {/* Footer */}
    </div>
  )
}
