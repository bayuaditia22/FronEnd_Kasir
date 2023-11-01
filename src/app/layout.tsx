import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from "@/../components/MainLayout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Halaman ini kasir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}