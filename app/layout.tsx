import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Azamat Shogen - Software Developer",
  description: "Portfolio of Azamat Shogen, a Software Developer specializing in modern web technologies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'