import './globals.css'
import type { Metadata } from 'next'
import type { MenuOptions } from '@/types/menu.type'

import { Montserrat, JetBrains_Mono } from 'next/font/google'

import { ThemeProvider } from '@/lib/theme-provider'

import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { About } from '@/components/About'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

const Monserrat = Montserrat({ subsets: ['latin'], variable: '--monserrat' })
const JetBrains = JetBrains_Mono({ subsets: ['latin'], variable: '--jet-brains' })

export const metadata: Metadata = {
  title: 'Los Premios Discord Midudev 2023',
  description:
    'Es hora de revelar tus habilidades únicas. Participa en las categorías más originales y emocionantes del servidor de Midudev. ¡La gloria te espera!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const routes: MenuOptions[] = [
    {
      label: 'Candidatos',
      path: '#'
    },
    {
      label: 'Categorias',
      path: '#'
    },
    {
      label: 'Login',
      path: '#'
    }
  ]

  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={`${Monserrat.variable} ${JetBrains.variable} bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light min-h-screen relative`}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <Menu options={routes} />

          <main>{children}</main>
          <About />

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}
