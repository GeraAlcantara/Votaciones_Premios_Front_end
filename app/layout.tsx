import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Los Premios Discord Midudev 2023',
  description:
    'Es hora de revelar tus habilidades únicas. Participa en las categorías más originales y emocionantes del servidor de Midudev. ¡La gloria te espera!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light`}
      >
        {children}
      </body>
    </html>
  )
}
