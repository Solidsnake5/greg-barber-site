import type React from "react"
import { Roboto } from "next/font/google"
import "./globals.css"
import InfoBar from "@/components/info-bar"
import Footer from "@/components/footer"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Precision Cuts | Professional Barber Services",
  description: "Professional barber services by James Mitchell. Book your appointment today.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <InfoBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
