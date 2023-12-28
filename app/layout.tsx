import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import {Inter, Space_Grotesk} from 'next/font/google'
import type {Metadata} from 'next'

export const metadata: Metadata = { 
  title: "DevFlow",
  description: "A community driven platform for developers to ask questions or answer asked questions and share their knowledge.",
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-spaceGrotesk',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient', 
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${space_grotesk.variable}`}>
          <h1 className="h1-bold">This is a header</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
