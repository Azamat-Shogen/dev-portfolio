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
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/icons/site.webmanifest",
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
import { icons } from "lucide-react"
