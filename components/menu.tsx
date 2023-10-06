'use client'

import type { MenuOptions } from '@/types/menu.type'

import React, { use, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from './logo'
import { ThemeSwitcher } from './ThemeSwitcher'

interface MenuProps {
  options: MenuOptions[]
}

function Menu({ options }: MenuProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    /* check if is mobile base on the screen size */
    const checkIsMobile = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true)
        setIsMenuOpen(false)
      } else {
        setIsMobile(false)
        setIsMenuOpen(true)
      }
    }
    /* check if have window has being resize event */

    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [isMenuOpen])

  const handleToogleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header
        className={`h-screen w-full fixed lg:static z-20 space-y-8 lg:space-x-0  lg:h-fit flex-col lg:flex-row px-8 lg:flex justify-between border-b-2 border-brand-dark dark:border-brand-yellow bg-brand-purple dark:bg-brand-dark text-brand-light transition lg:transition-none duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Logo />
        <div className="flex flex-col lg:flex-row gap-8  lg:items-center">
          <nav>
            <ul className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-center lg:gap-4">
              {options.map((option, index) => (
                <li key={`option.path-${index}`}>
                  <Link
                    className={`
								${
                  (pathname || pathname.includes(option?.customActive as string)) === option.path
                    ? 'underline'
                    : ''
                } font-jet-brains
							`}
                    href={option.path}
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-5 left-5 self-end lg:static lg:right-[unset] lg:bottom-[unset] lg:self-auto ">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      {/* Mobile button Show Menu */}
      <button
        className="fixed bottom-5 right-5 right z-50 w-10 h-10 bg-brand-yellow rounded-full text-brand-dark lg:hidden"
        onClick={handleToogleMenu}
      >
        {/* TODO:  Mobile button Remplazar la 'x' con un svg para el menu y uno para cerrar que dependan se si isMenuOpen  */}x
      </button>
    </>
  )
}

export default Menu
